import React, { useEffect, useState } from 'react';
import Card from './Card';

const Quienessomos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerproductos();
  }, []);
  const obtenerproductos = async () => {
    const datos = await fetch('https://fakestoreapi.com/products');
    const prod = await datos.json();
    setProductos(prod);
  };
  return (
    <div>
      <h3>Lista de productos</h3>
      <div className="row">
        {productos.map((producto) => (
          <Card
            url={producto.image}
            title={producto.title}
            precioOriginal={producto.price}
            precioDescuento={0}
            description={producto.description}
            ruta="/quienessomos"
          />
        ))}
      </div>
    </div>
  );
};

export default Quienessomos;
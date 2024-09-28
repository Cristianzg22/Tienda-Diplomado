import React, { useState, useEffect } from 'react';
import Card from './Card';

const Descuentos = () => {
  const [productos, setProductos] = useState([]);
  const [descuento, setDescuento] = useState(0);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const datos = await fetch('https://fakestoreapi.com/products');
        const prod = await datos.json();

        const productosDescuento = prod.map((producto) => ({
          ...producto,
          precioOriginal: producto.price,
          precioDescuento: (producto.price * (1 - descuento / 100)).toFixed(2),
        }));

        setProductos(productosDescuento);
      } catch (error) {
        console.error('Error al obtener productos', error);
      }
    };

    obtenerProductos();
  }, [descuento]);

  const handleDescuentoChange = (e) => {
    setDescuento(e.target.value);
  };

  return (
    <div className="descuento-container">
      <div className="descuento-form">
        <h1>Productos con descuento</h1>
        <form>
          <label className="descuento-label">Seleccione el porcentaje de descuento:</label>
          <select
            value={descuento}
            onChange={handleDescuentoChange}
            className="descuento-select"
          >
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
          </select>
        </form>
      </div>
      <div className="descuento-productos">
        <div className="row">
          {productos.map((producto) => (
            <Card
              url={producto.image}
              title={producto.title}
              precioOriginal={producto.precioOriginal}
              precioDescuento={producto.precioDescuento}
              description={producto.description}
              ruta="/descuentos"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descuentos;
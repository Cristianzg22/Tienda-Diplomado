import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <div className="inicio-container">
        <h1>Bienvenido a nuestra tienda en línea</h1>
        <p>En nuestra tienda en línea, puedes encontrar una variedad de productos de alta calidad a precios competitivos.</p>
        <div className="inicio-imagenes">
          <img src="https://picsum.photos/200/300/?category=clothing" alt="Imagen 1" />
          <img src="https://picsum.photos/200/301/?category=clothing" alt="Imagen 2" />
          <img src="https://picsum.photos/200/302/?category=clothing" alt="Imagen 3" />
        </div>
        <p>Visita nuestras secciones de productos para encontrar lo que estás buscando.</p>
        <Link to="/productos" className="btn btn-primary">Ver productos</Link>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Tienda en línea. Todos los derechos reservados.</p>
        <p>Diseñado y desarrollado por Cristian Zambrano</p>
      </footer>
    </div>
  );
};

export default Inicio;
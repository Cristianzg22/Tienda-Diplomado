import React from 'react';

const Card = ({ url, title, precioOriginal, precioDescuento, description, ruta }) => {
  const descripcionCorta = description.substring(0, 100) + '...';

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {ruta === '/descuentos' ? (
            <p>
              <span style={{ textDecoration: 'line-through' }}>
                ${precioOriginal}
              </span>
              <span style={{ color: 'red' }}>
                ${precioDescuento}
              </span>
            </p>
          ) : (
            <p>${precioOriginal}</p>
          )}
          <p className="card-text">{descripcionCorta}</p>
          <a href="#" className="btn btn-primary">
            Agregar Al Carrito
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
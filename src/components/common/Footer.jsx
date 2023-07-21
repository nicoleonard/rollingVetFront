import React from "react";
import '../../App.css';

const Footer = () => {
  return (
    <footer className='fondoFooter fuente'>
      <div className="container">
        <nav className="row">
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="mb-2"></li>
            <li className="text-center"></li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="mb-2"></li>
            <li className="text-center"></li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="mb-2 fs-2">Seguinos en nuestras redes:</li>
            <li className="d-flex justify-content-between">
              <a href="https://facebook.com" target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
              <i className="bi bi-twitter"></i>
              </a>

            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

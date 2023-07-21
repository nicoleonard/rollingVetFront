import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="fondoFooter fuente">
      <div className="container">
        <nav className="row">
          <Link
            to="/"
            className="clo-12 col-md-3 d-flex align-items-center justify-content-center"
          >
            <img src={logo} alt="Logo Rolling Vet" width='150' />
          </Link>


          <ul className="col-12 col-md-3 list-unstyled">
            <li className="m-2 fs-2">¿Consultas?</li>
            <li>
            <i className="bi bi-telephone-fill fs-2"> 381-333-444</i>
            </li>
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

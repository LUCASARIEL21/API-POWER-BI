import React from "react";
import logo from "../img/power-bi.png";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div id="Navbar">
        <img src={logo} alt="txt" />
        <h1>Analise de Vendas Cummins Ano 2022</h1>
      </div>
      <div id="Dash">
        <iframe
          title="Analise de Vendas Cummins"
          width="100%"
          height="600"
          src="https://app.powerbi.com/view?r=eyJrIjoiMzVjYTdjZTgtYTk3My00MTQwLTgyODItMTMwNDVkYTc5ODA1IiwidCI6Ijk3YTZlYTk4LTA4OGItNGM1NC04ZmYwLTg5MTAwYmIyOWIzMyJ9"
        ></iframe>
      </div>
      <div id="Footer">
        <div>
          <strong className="titulo">Encontre-me</strong>
          <p>
            WhatsApp:
            <a href="https://wa.me/+5583988378397">
              (83) 98837-8397
            </a>
          </p>
          <p>
            E-mail:
            <a href="mailto:lukasbcunha@gmail.com">lukasbcunha@gmail.com</a>
          </p>
        </div>
        <div id="copyright">
          Desenvolvido por Lucas Ariel
        </div>
      </div>
    </div>
  );
};

export default Home;

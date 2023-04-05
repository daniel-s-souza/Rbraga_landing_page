import React, { Component } from "react";
import "./styles.css";

export default class NavigationBar extends Component {
  state = {
    activeSection: null,
  };

  handleSectionClick = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { activeSection } = this.state;
    return (
      <nav className="NavigationBar">
        <ul>
          <li
            className={activeSection === "home" ? "active" : null}
            onClick={() => this.handleSectionClick("home")}
          >
            <a href="#home">Início</a>
          </li>
          <li
            className={activeSection === "conteudo" ? "active" : null}
            onClick={() => this.handleSectionClick("about")}
          >
            <a href="#conteudo">Conteudo</a>
          </li>
          <li
            className={activeSection === "indicacaoCurso" ? "active" : null}
            onClick={() => this.handleSectionClick("services")}
          >
            <a href="#indicacaoCurso">Esse curso é para mim?</a>
          </li>
          <li
            className={activeSection === "sobre" ? "active" : null}
            onClick={() => this.handleSectionClick("contact")}
          >
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
      </nav>
    );
  }
}
import React, { Component } from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import AboutPage from "../../pages/AboutPage/index";
import HomePage from "../../pages/homepage/index";
import Conteudo from "../../pages/conteudo/index";
import IndicacaoCurso from "../../pages/indicacaoCurso/index";


export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to={HomePage}>Home</Link>
        <Link to={Conteudo}>O que vou estudar?</Link>
        <Link to={IndicacaoCurso}>Para quem é esse curso?</Link>
        <Link to={AboutPage}>Sobre</Link>
      </BrowserRouter>
    )
  }
}

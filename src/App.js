import React, { Component } from 'react';
import Header from './components/Header';
import Aboutpage from './pages/AboutPage';
import HomePage from './pages/homepage';
import Content from './pages/conteudo/index';
import Indication from './pages/indicacaoCurso/index'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
        <Content />
        <Indication />
        <Aboutpage />
      </>
    )
  }
}


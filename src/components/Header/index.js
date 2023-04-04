/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'




export default class headerNavigation extends Component {

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div>
        <nav>
          <a onClick={() => this.scrollToSection('home')}>Home</a>
          <a onClick={() => this.scrollToSection('conteudo')}>O que vou aprender</a>
          <a onClick={() => this.scrollToSection('indicacaoCurso')}>Esse curso é para mim?</a>
          <a onClick={() => this.scrollToSection('sobre')}>Sobre</a>
        </nav>
        
      </div>
    );
  }
}
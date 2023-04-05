/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './styles.css';



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
        <nav className='navContent'>
          <a className='navLinks' onClick={() => this.scrollToSection('home')}>Home</a>
          <a className='navLinks' onClick={() => this.scrollToSection('conteudo')}>O que vou aprender</a>
          <a className='navLinks' onClick={() => this.scrollToSection('indicacaoCurso')}>Esse curso é para mim?</a>
          <a className='navLinks' onClick={() => this.scrollToSection('sobre')}>Sobre</a>
        </nav>
        
      </div>
    );
  }
}
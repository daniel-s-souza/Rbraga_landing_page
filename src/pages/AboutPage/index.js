import React, { Component } from 'react'
import img from '../../imgs/rb112.png'
import './style.css';

export default class ola extends Component {
  render() {
    return (
      <div id='sobre'>
        <img className='aboutImg' src={img} alt='Robson Braga'/>
        <h3 className='aboutTitle'>Olá, aqui é Robson Braga.</h3>

        <p className='aboutText'>
        Sou administrador, especialista em finanças, <b>mestre em Administração pela Universidade Federal da Bahia (UFBA)</b> e <b></b>doutor em contabilidade e controladoria pela Universidade de São Paulo (USP). Cursei Data Science na Universidade de Salamanca (Espanha).
        Sou professor de finanças com mais de <b>20 anos de experiência</b> e, como consultor empresarial já auxiliei dezenas de empresas a organizar sua situação financeira.
        Neste curso, vou ajudar você a organizar a sua vida financeira, apresentando métodos práticos de como ter um relacionamento financeiramente feliz. Vamos lá?
        </p>      
      </div>
    )
  }
}

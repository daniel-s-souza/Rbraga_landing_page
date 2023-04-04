import React, { Component } from 'react'
import img from '../../imgs/rb112.png'

export default class ola extends Component {
  render() {
    return (
      <div id='sobre'>
        <img src={img} alt='Robson Braga'/>
        <h3 className='aboutTitle'>Olá aqui é Robson Braga.</h3>

        <p>
        Sou administrador, especialista em finanças, mestre em Administração pela Universidade Federal da Bahia (UFBA) e doutor em contabilidade e controladoria pela Universidade de São Paulo (USP). Cursei Data Science na Universidade de Salamanca (Espanha).
        Sou professor de finanças com mais de 20 anos de experiência e, como consultor empresarial já auxiliei dezenas de empresas a organizar sua situação financeira.
        Neste curso, vou ajudar você a organizar a sua vida financeira, apresentando métodos práticos de como ter um relacionamento financeiramente feliz. Vamos lá?
        </p>
        
      </div>
    )
  }
}

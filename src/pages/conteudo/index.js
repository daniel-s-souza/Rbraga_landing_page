import React, { Component } from 'react'
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className='content' id='conteudo'>
          <section>
      <div className='modulo1'>
        <p className='moduloTitle'> Módulo I </p>
        <p className='moduloHeadLine'> Não confunda amor com finanças</p>
        <p className='moduloContent'>Compreenda a relação do dinheiro no relacionamento a dois e como evitar erros que os casais cometem que destroem a boa relação financeira.</p>
      </div>
      <div className='modulo2'>
        <p className='moduloTitleGreyBox'> Módulo II </p>
        <p className='moduloHeadLine'> Você erra desde o namoro</p>
        <p className='moduloContent'>Ainda é tempo de corrigir erros financeiros que começaram nos primeiros dias da relação. Rompa com os erros do passado.</p>
      </div>
      <div className='modulo3'>
        <p className='moduloTitle'> Módulo III </p>
        <p className='moduloHeadLine'> Confiança financeira é essencial</p>
        <p className='moduloContent'>Como não cair nas armadilhas do consumo e evitar brigar por dinheiro na relação. Como os casais financeiramente felizes fazem?</p>
      </div>
      </section>
      <section>
      <div className='modulo4'>
        <p className='moduloTitleGreyBox'> Módulo IV </p>
        <p className='moduloHeadLine'> Vocês se entendem financeiramente?</p>
        <p className='moduloContent'>Como tomar decisões financeiras importantes: como evitar a morte financeira na hora de comprar um carro ou a casa própria.</p>
      </div>
      <div className='modulo5'>
        <p className='moduloTitle'> Módulo V </p>
        <p className='moduloHeadLine'> Cartão de crédito: amigo ou vilão?</p>
        <p className='moduloContent'>Aprenda a avaliar quanto você ganha e a avaliar os gastos do cartão de crédito, evitando as armadilhas do crédito rotativo e do endividamento.</p>
      </div>
      <div className='modulo6'>
        <p className='moduloTitleGreyBox'> Módulo VI </p>
        <p className='moduloHeadLine'> Dinheiro traz felicidade ao casal?</p>
        <p className='moduloContent'>Saiba como controlar o orçamento familiar e considerar o dinheiro como instrumento de bem-estar, por meio de simulações de investimentos.</p>
      </div>
      </section> 

      </div>
    )
  }
}

import React, { Component } from 'react'
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div className='indicationBox' id='indicacaoCurso'>
        <section className="titleSection">
        <h2> Esse curso é para mim?</h2>
        <h2> Se você se identifica com os perfis abaixo, SIM </h2>
      </section>
      <div className='divReqs'>
        <ul className='listReqs1'>
          <li className='listElement'>Para pessoas que ainda estão namorando e querem começar o relacionamento financeiro corretamente.</li>
          <li className='listElement'>Para jovens casais que desejam tomar decisões financeiras corretas e criar um plano de geração de riqueza.</li>
          <li className='listElement'>Para casais maduros que precisam repensar sua vida financeira e melhorar sua relação com o dinheiro.</li>
          <li className='listElement'>Para você que deseja conhecer métodos de relacionamento financeiro para viver uma vida a dois sem tropeços.</li>
          <li className='listElement'>Para pessoas que não sabe mais como parar de brigar por dinheiro e querem melhorar seu relacionamento financeiro.</li>
        </ul>
        <ul className='listReqs2'>
          <li className='listElement'>Para casais que querem pensar o futuro financeiro dos filhos e querem começar a investir.</li>
          <li className='listElement'>Para pessoas que não sabe como se relacionar financeiramente com o seu parceiro.</li>
          <li className='listElement'>Para os casais que querem avaliar a decisão de financiar uma casa ou carro sem perder o controle financeiro.</li>
          <li className='listElement'>Para pessoas que não querem envelhecer carregando dívidas, mas sim uma carteira de investimentos sólida.</li>
          <li className='listElement'>Para pessoas que vivem com parceiros, com quem querem passar o resto da vida feliz e com dinheiro.</li>
        </ul>
      </div>
      </div>
    )
  }
}

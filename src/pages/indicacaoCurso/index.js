import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div id='indicacaoCurso'>
        <section className="titleSection">
        <h2> Esse curso é para mim?</h2>
        <h2> Se você se identifica com os perfis abaixo, SIM </h2>
      </section>
      <div className='listReqs1'>
        <ul>
          <li>Para pessoas que ainda estão namorando e querem começar o relacionamento financeiro corretamente.</li>
          <li>Para jovens casais que desejam tomar decisões financeiras corretas e criar um plano de geração de riqueza.</li>
          <li>Para casais maduros que precisam repensar sua vida financeira e melhorar sua relação com o dinheiro.</li>
          <li>Para você que deseja conhecer métodos de relacionamento financeiro para viver uma vida a dois sem tropeços.</li>
          <li>Para pessoas que não sabe mais como parar de brigar por dinheiro e querem melhorar seu relacionamento financeiro.</li>
        </ul>
      </div>
      <div className='listReqs2'>
        <ul>
          <li>Para casais que querem pensar o futuro financeiro dos filhos e querem começar a investir.</li>
          <li>Para pessoas que não sabe como se relacionar financeiramente com o seu parceiro.</li>
          <li>Para os casais que querem avaliar a decisão de financiar uma casa ou carro sem perder o controle financeiro.</li>
          <li>Para pessoas que não querem envelhecer carregando dívidas, mas sim uma carteira de investimentos sólida.</li>
          <li>Para pessoas que vivem com parceiros, com quem querem passar o resto da vida feliz e com dinheiro.</li>
        </ul>
      </div>
      </div>
    )
  }
}

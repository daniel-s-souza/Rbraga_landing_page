import React, { Component } from 'react'
import img from '../../imgs/casal.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div className='imgBlock'>
        <img src={img} alt='casal estudando finanças' />
        <div className='textBlock'>
          <h3 className='h3Line'> Evento Online </h3>
          <h1 className='h1Text'> 
              Na alegria e na tristeza
              Na saúde e na doença
              Na riqueza e...
              Na conta negativa? 
          </h1>
          <h2 className='h2Text'> 
            Pessoas casadas prosperam mais financeiramente. Se isso não está acontecendo contigo, esse é o curso! 
          </h2>
          <h4 className='h4Line'>
            Lançamento: Dia 08 de abril de 2023 com Robson Braga 
          </h4>
        </div>
      </div>
    )
  }
}

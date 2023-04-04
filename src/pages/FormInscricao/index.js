import React, { Component } from 'react';

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exibirFormulario: false,
      email: '',
      name: '',
      erroEmail: false,
      validForm: false,
    };

    this.handleMostrarFormulario = this.handleMostrarFormulario.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMostrarFormulario() {
    this.setState({ exibirFormulario: true });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const emailValidation = /\S+@\S+\.\S+/;

    this.setState({
      [name]: value,
      erroEmail: name === 'email' && !emailValidation.test(value),
    }, () => {
      const { nome, email, erroEmail } = this.state;
      const formularioValido = nome !== '' && email !== '' && !erroEmail;
      this.setState({ formularioValido });
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('Nome: ', this.state.name);
    console.log('Email: ', this.state.email);
  }


  render() {
    const { name, email, erroEmail, formularioValido } = this.state;
    return (
      <div>
        <button onClick={this.handleMostrarFormulario}>Inscreva-se</button>

        {this.state.exibirFormulario && (
          <form onSubmit={this.handleSubmit}>
            {
              <>
            <label htmlFor='name'>
              Nome:
              <input
                type='text'
                name='name'
                value={name}
                onChange={this.handleInputChange}
                />
            </label>
            <label htmlFor='email'>
              Email:
              <input 
                type= 'email'
                name='email'
                value={email}
                onChange={this.handleInputChange}
              />
            </label>
              <button type="submit" disabled={!formularioValido}>Enviar</button>
              {erroEmail && <p>Endereço de e-mail inválido.</p>}
              </>
            }
          </form>
        )}
      </div>
    );
  }
}

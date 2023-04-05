import React, { Component } from "react";
import "./style.css";

export default class SubscribeForm extends Component {
  state = {
    showForm: false,
    name: "",
    email: "",
    errors: {},
  };

  handleSubscribe = () => {
    this.setState({ showForm: true });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Nome é obrigatório";
    }

    if (!email.trim()) {
      errors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email inválido";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      console.log("Formulário enviado com sucesso!");
      // enviar o formulário para o servidor aqui
    }
  };

  render() {
    const { showForm, name, email, errors } = this.state;
    return (
      <div className="SubscribeForm">
        <button onClick={this.handleSubscribe}>Inscreva-se</button>
        {showForm && (
          <div className="overlay">
            <div className="form-box">
              <h2 className="titleForm">Inscreva-se</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <label className="nameLabel" htmlFor="name">Nome:</label>
                  <input
                    className="nameInput"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="input-group">
                  <label className="emailLabel" htmlFor="email">Email:</label>
                  <input
                    className="emailInput"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <button className="buttonForm" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

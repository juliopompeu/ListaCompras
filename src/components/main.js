import React, { Component } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Form from './form/indexForm';
import Tarefas from './tarefas/indexTarefas';

import './main.css';
import Carrinho from './carrinho/indexCarrinho';




export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    Compras: [],
    itensCarrinho: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  // HANDLE

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  };


  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleConfirm = (e, index) => {
    // TESTE
    const { tarefas, itensCarrinho } = this.state;
    const novasTarefas = [...tarefas];

    itensCarrinho.push(novasTarefas.splice(index, 1));
    // novasTarefas.splice(index, 1); // teste

    this.setState({
      Compras: [...itensCarrinho],
      tarefas: [...novasTarefas],
    });
  };



  // RENDERIZAÇÃO
  render() {
    const {
 Compras, novaTarefa, tarefas, itensCarrinho
} = this.state;

    return (
      <div className="main">
        <h1>
          Sua lista de compras
          {' '}
          <FaShoppingBasket />
        </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleConfirm={this.handleConfirm}
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

        <div className="carrinho">

          <h1>
            Suas compras
            {' '}
            <AiOutlineShoppingCart />
          </h1>

          {/* <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            novaTarefa={novaTarefa}
          /> */}

          <Carrinho
            handleConfirm={this.handleConfirm}
            Compras={Compras}
            itensCarrinho={itensCarrinho}
            handleEdit={this.handleEdit}
          />

        </div>

      </div>


    );
  }
}

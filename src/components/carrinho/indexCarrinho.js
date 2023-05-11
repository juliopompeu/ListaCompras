import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaCheck } from 'react-icons/fa';

import "./carrinho.css";

// Se precisar colocar botões na lateral, precisará habilitar handleEdit, Confirm
export default function Carrinho({
  itensCarrinho,
}) {
  return (
    <ul className="tarefas">
      {itensCarrinho.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}

          {/* Opções para colocar o botão na lateral da tarefa */}
          {/* <span>

            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />


            <FaCheck
              className="confirm"
              onClick={(e) => handleConfirm(e, index)}
            />

          </span> */}

        </li>
      ))}
    </ul>
  );
}

Carrinho.propTypes = {
  itensCarrinho: PropTypes.array.isRequired,
  // handleEdit: PropTypes.func.isRequired,
  // handleConfirm: PropTypes.func.isRequired,
};


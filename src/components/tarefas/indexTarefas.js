import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose, FaCheck } from 'react-icons/fa';

import "./tarefas.css";

export default function Tarefas({
  tarefas, handleEdit, handleDelete, handleConfirm
}) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}

          <span>

            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />

            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />


            <FaCheck
              className="confirm"
              onClick={(e) => handleConfirm(e, index)}
            />


          </span>

        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};


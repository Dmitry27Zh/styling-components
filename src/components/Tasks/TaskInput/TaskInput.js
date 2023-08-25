import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }

  &.invalid input {
    border-color: red;
    background-color: salmon;
  }

  &.invalid label {
    color: red;
  }
`;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputValidity, setInputValidity] = useState(true)

  const checkInputValidity = (value) => {
    return value.trim().length !== 0
  }

  const taskInputChangeHandler = (event) => {
    if (checkInputValidity(event.target.value)) {
      setInputValidity(true)
    }

    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const currentInputValidity = checkInputValidity(inputText)
    setInputValidity(currentInputValidity)

    if (!currentInputValidity) {
      return
    }

    props.onAddTask(inputText);
  };
  const getFormControlClassName = () => {
    let className = ''

    if (!inputValidity) {
      className += ' invalid'
    }

    return className
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={getFormControlClassName()}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </FormControl>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;

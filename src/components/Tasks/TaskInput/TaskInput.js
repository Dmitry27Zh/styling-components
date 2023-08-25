import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

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
  const labelStyles = {
    color: inputValidity ? '' : 'red'
  }
  const inputStyles = {
    borderColor: inputValidity ? '' : 'red',
    backgroundColor: inputValidity ? '' : 'salmon'
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={labelStyles}>Задачи</label>
        <input type="text" style={inputStyles} onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;

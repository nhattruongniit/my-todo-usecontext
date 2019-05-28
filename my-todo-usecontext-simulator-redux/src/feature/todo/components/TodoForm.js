import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { todoAction } from "../reducer/todoReducer";

import connect from '../../../Context/connect';

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const resetInput = () => {
    setValue("");
    setError("");
  };

  const handleOnChange = func => event => {
    const { value } = event.target;
    func(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return setError(true);

    addTodo({
      id: `${Date.now()}-${Math.random()}`,
      title: value,
      completed: false,
      createAt: Date.now()
    });
    resetInput();
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleOnChange(setValue)}
        value={value}
      />
      {error && <div class="text-danger">Please enter text.</div>}
      <br />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

const mapStateToProps = store => ({});

const mapDispathToProps = dispatch => ({
  addTodo: param => dispatch(todoAction.addTodo(param)),
});

export const TodoForm = connect(
  mapStateToProps,
  mapDispathToProps
)(Form);
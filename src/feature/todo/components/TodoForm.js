import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// contexts
import { useStateTodo } from "../context/TodoContext";

// redux
import { TODO_ADD } from "../redux/constant";

export const TodoForm = () => {
  const { dispatcher } = useStateTodo();
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

    dispatcher({
      type: TODO_ADD,
      payload: {
        id: `${Date.now()}-${Math.random()}`,
        title: value,
        completed: false,
        createAt: Date.now()
      }
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

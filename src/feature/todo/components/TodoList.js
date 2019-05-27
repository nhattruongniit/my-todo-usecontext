import React from "react";

// material
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// contexts
import { useStateTodo } from "../context/TodoContext";

export const TodoList = () => {
  const [state] = useStateTodo();

  console.log("============TodoList=========", state);

  return state.todo.map((item, index) => {
    return (
      <ListItem key={index} dense button>
        <ListItemText primary={item.title} />
        <div className="buttonMaterial">
          <Button
            variant="contained"
            color="primary"
            className={`btn-complete`}
            onClick={() => console.log(item.id)}
          >
            Complete
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              console.log(item.id);
            }}
          >
            Delete
          </Button>
        </div>
      </ListItem>
    );
  });
};

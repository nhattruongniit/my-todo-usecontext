import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export const TodoList = () => {
  return (
    <ListItem dense button>
      <ListItemText primary="item 1" />
      <div className="buttonMaterial">
        <Button
          variant="contained"
          color="primary"
          className={`btn-complete`}
          onClick={() => console.log(1)}
        >
          Complete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            console.log(1);
          }}
        >
          Delete
        </Button>
      </div>
    </ListItem>
  );
};

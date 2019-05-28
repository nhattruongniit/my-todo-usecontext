//constants
export const TODO_ADD = "TODO_ADD";
export const TODO_COMPLETED = "TODO_COMPLETED";
export const TODO_DELETED = "TODO_DELETED";


//actions
export const todoAction = {
  addTodo: payload => ({
    type: TODO_ADD,
    payload
  }),
  deleteTodo: payload => ({
    type: TODO_DELETED,
    payload
  }),
  completeTodo: payload => ({
    type: TODO_COMPLETED,
    payload
  })
};

//reducers
const initialData = {
  todo: {
    data: []
  }
};

const todoReducer = (state = initialData, { type, payload }) => {
  const {
    todo: {
      data
    }
  } = state;

  switch (type) {
    case TODO_ADD: {
      return {
        ...state,
        todo: {
          data: [...data, payload]
        }
      };
    }
    case TODO_COMPLETED: {
      return {
        ...state,
        todo: {
          data: payload
        }
      };
    }
    case TODO_DELETED: {
      return {
        ...state,
        todo: {
          data: payload
        }
      };
    }
    default:
      return state;
  }
};

export default todoReducer;

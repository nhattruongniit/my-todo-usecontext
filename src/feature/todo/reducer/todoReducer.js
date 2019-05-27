export const TODO_ADD = "TODO_ADD";
export const TODO_COMPLETED = "TODO_COMPLETED";
export const TODO_DELETED = "TODO_DELETED";

export const reducer = (state, { type, payload }) => {
  const {
    todo: { data }
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

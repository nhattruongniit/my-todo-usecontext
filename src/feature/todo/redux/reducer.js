import { TODO_ADD, TODO_COMPLETED, TODO_DELETED } from "./constant";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_ADD: {
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    }
    case TODO_COMPLETED: {
      return {
        ...state,
        todo: payload
      };
    }
    case TODO_DELETED: {
      return {
        ...state,
        todo: payload
      };
    }
    default:
      return state;
  }
};

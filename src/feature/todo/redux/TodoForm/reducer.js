import { TODO_SUBMIT } from "./constant";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_SUBMIT: {
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    }
    default:
      return state;
  }
};

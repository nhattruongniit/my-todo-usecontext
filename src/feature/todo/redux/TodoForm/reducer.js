import { TODO_SUBMIT } from "./constant";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_SUBMIT: {
      return {
        data: { ...state, payload }
      };
    }
    default:
      return state;
  }
};

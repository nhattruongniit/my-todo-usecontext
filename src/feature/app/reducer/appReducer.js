export const SAVE_TODO = "SAVE_TODO";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SAVE_TODO: {
      return {
        ...state,
        todo: {
          data: [...payload]
        }
      };
    }
    default:
      return state;
  }
};

export const initialState = {
  isOpen: false,
  taskName: "",
};

export function newTaskReducer(state, action) {
  switch (action.type) {
    case "open":
    case "close":
      return { ...state, isOpen: !state.isOpen };
    case "input":
      return { ...state, taskName: action.payload };
    case "reset":
      return { ...initialState };
    default:
      return "unknown action type";
  }
}

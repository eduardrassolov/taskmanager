export function taskReducer(state, action) {
  switch (action.type) {
    case "changeTitle":
      return { ...state, title: action.payload };
    case "changeCompleted":
      return {
        ...state,
        isCompleted: {
          status: !state.isCompleted.status,
          timeCompleted: state.isCompleted.status ? null : Date.now(),
        },
      };
    case "changeNotes":
      return { ...state, notes: action.payload };

    default:
      throw new Error("Invalid action type");
  }
}

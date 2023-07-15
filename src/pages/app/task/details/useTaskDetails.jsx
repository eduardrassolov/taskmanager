import { create } from "zustand";

const inititalState = [
  { isActive: false, name: "reminder" },
  { isActive: false, name: "priority" },
  { isActive: false, name: "subTasks" },
];

export const useTaskDetails = create((set) => ({
  optionList: [...inititalState],

  changeOption: (name) =>
    set((state) => {
      console.log(state);
      const optionList = state.optionList.map((option) => {
        if (option.name === name) {
          return { ...option, isActive: !option.isActive };
        }
        return option;
      });
      console.log(optionList);
    }),
}));

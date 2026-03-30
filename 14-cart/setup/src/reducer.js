import { ActionType } from "./context";

export default function reducer(state, { type, id }) {
  switch (type) {
    case ActionType.increment:
      return state.map((item) => {
        if (item.id === id) return { ...item, amount: item.amount + 1 };
        else return item;
      });
    case ActionType.decrement:
      return state.map((item) => {
        if (item.id === id) return { ...item, amount: item.amount - 1 };
        else return item;
      });

    case ActionType.removeSingle:
      return state.filter((item) => {
        return item.id !== id;
      });
    case ActionType.removeAll:
      return [];

    default:
      return state;
  }
}

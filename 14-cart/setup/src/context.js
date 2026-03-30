import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url =
  "https://corsproxy.io/?url=https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);

  const [state, dispatch] = useReducer(reducer, cartItems);

  useEffect(() => {
    setCart(state);
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

export const ActionType = {
  increment: "increment",
  decrement: "decrement",
  removeSingle: "remove-single",
  removeAll: "remove-all",
};

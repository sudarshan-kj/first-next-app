import React, { useContext, useReducer, createContext } from "react";

const GlobalContext = createContext();

const initState = {
  previewEnabled: false,
  metaData: "",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "PREVIEW_ENABLED":
      return { ...state, previewEnabled: true };
    case "PREVIEW_DISABLED":
      return { ...state, previewEnabled: false };
    default:
      return state;
  }
};

export const useGlobal = () => useContext(GlobalContext);

const Global = ({ children }) => {
  const [globalState, dispatch] = useReducer(globalReducer, initState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;

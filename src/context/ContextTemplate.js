import React, { useReducer } from "react";

export default (reducer, actions, initialstate) => {
  const context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <context.Provider value={{ data: state, ...boundActions }}>
        {children}
      </context.Provider>
    );
  };
  return [context, Provider];
};

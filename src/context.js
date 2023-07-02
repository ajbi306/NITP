import {createContext, useEffect, useReducer}  from "react"

import Reducer from "./reducer";

const Intial_state = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isfetching: false,
    error: false,
};

export const Context = createContext(Intial_state);

export const ContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(Reducer, Intial_state);
  
  useEffect(() =>{
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  
  return(
    <Context.Provider value = {
            {
                user: state.user,
                isfetching: state.isfetching,
                error: state.error,
                dispatch,
            }
        }
        > 
        {children}
      </Context.Provider>
  );
};
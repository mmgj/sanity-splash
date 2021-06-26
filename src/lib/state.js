import React, { createContext, useContext } from 'react';
import { useReducer } from 'reinspect';

const initState = {
  siteSettings: null,
  personalia: null,
  curriculum: null,
};

export const configuredReducer = (state, action) => {
  switch (action.type) {
    case 'setSiteSettings': {
      return {
        ...state,
        siteSettings: action.payload,
      };
    }
    case 'setPersonalia': {
      return {
        ...state,
        personalia: action.payload,
      };
    }
    case 'setCurriculum': {
      return {
        ...state,
        curriculum: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export const StateContext = createContext();
export const StateProvider = ({ children }) => (
  <StateContext.Provider
    value={useReducer(configuredReducer, initState, undefined, 'app-reducer')}
  >
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

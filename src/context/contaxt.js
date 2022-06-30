import React, { createContext, useReducer } from "react";

export const themContext = createContext()
const initialState = {
    darkMode: false
}

const themReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default: return state;
    }
}

export const ThemProvider = (props) => {
    const [state, dispatch] = useReducer(themReducer, initialState)
    return (
        <themContext.Provider value={{ state, dispatch }}>
            {props.children}
        </themContext.Provider>
    );
};
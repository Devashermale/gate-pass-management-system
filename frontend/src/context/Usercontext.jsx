import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'set_user':
            return {
                User: action.payload
            };
        case 'create_user':
            return {
                User: [action.payload, ...(state.User || [])] 
            };
        case 'delete_user':
            return {
                User: (state.User || []).filter((u) => u._id !== action.payload._id)
            };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        User: null
    });

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
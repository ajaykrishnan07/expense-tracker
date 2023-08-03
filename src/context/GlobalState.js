import React, {createContext, useReducer}from "react";
import AppReducer from "./AppReducer";

//Initial State 
const initialState ={
    transactions: [ 
        { id: 1, text: 'Flower', amount: -20 }, //negative number=> Expense
        { id: 2, text: 'Salary', amount: 300 }, //positive number=> Income
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }],

}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component => Used for access of this GlobalState for other Components

export const GlobalProvider = ({children}) => {
 const [state,dispatch] = useReducer(AppReducer,initialState);
 return(<GlobalContext.Provider value={{
    transactions: state.transactions
 }}>
        {children}
    
    </GlobalContext.Provider>)

}
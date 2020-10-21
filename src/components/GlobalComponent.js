import React,{useState,useReducer,component} from 'react'

const initialState  = {
    transactions: [
    
]
}

export const Context = React.createContext()

const AppReducer = ( state,action) => {
    switch (action.type){
        case "addnewtransaction":
            return {
                ...state,
                transactions : [ action.payload,...state.transactions]
            }

        case "deletetransaction":
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        default:
            return state
    }
}

export default function GlobalComponent({children}) {

    const [state,dispatch] = useReducer(AppReducer,initialState)


    function addTransaction(transaction) {
        dispatch({
            type:"addnewtransaction",
            payload:transaction
        });
        }

    function deleteTransaction(id) {
        dispatch({
            type:"deletetransaction",
            payload:id
        });
        }

    return (
        <Context.Provider value={{transactions:state.transactions,addTransaction,deleteTransaction}}>{children}</Context.Provider>
    )
}

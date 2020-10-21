import React,{useContext} from 'react'
import {Context} from "./GlobalComponent";

export default function Balance() {

    const {transactions} = useContext(Context)
    const amounts = transactions.map(transaction => transaction.amount);

    const incomee = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expensee = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
        ).toFixed(2);
    
    return (
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className   = "money plus">₹{incomee}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className   = "money minus">₹{expensee}</p>
            </div>
        </div>
    
    )
}

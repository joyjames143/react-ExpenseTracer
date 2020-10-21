import React,{useContext} from 'react'
import Balance from "./Balance"
import History from "./History"
import NewTransaction from "./NewTransaction"
import {Context} from "./GlobalComponent";


export default function ExpenseTracker() {

    const {transactions} = useContext(Context)
    let total = 0

    transactions.map(transcation=>{ total = total + transcation.amount})

    return (
        
            <div className="container">
                <h2>Expense Tracker</h2>
                <h4>YOUR BALANCE </h4>
                <h1>₹{total}</h1>
                <Balance/>
                <History />
                <NewTransaction/>
            </div>
        
    );
}

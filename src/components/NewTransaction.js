import React,{useState,useContext} from 'react'
import {Context} from "./GlobalComponent";

export default function NewTransaction(props) {
    const [Reason,setReason] = useState('')
    const [amount,setAmount] = useState()
    const {addTransaction} =useContext(Context)
    

    

    const onSubmit = (e) =>{
        e.preventDefault();
    }
    
    const reset = () =>{
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            reason:Reason,
            amount: +amount
        }
    
        addTransaction(newTransaction);
        
        setReason('')
        setAmount(0)
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={Reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount">
                Amount <br/>
                (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button onClick={reset} className="btn">Add transaction</button>
        </form>
    </>
    )
}

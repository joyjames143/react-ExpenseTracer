import React,{useContext} from 'react';
import {Context} from "./GlobalComponent";

export default function History() {

    const {transactions} = useContext(Context)
    const { deleteTransaction} = useContext(Context)

    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction =>(  <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                                                        {transaction.reason} 
                                                    <span>
                                                            
                                                        ₹{Math.abs(transaction.amount)}
                                                    </span>
                                                    <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">
                                                        x
                                                    </button>
                                                </li>
                                            )
                            )
            }
            </ul>

        </>
    )
}

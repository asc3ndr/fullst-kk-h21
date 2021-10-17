import { useState } from "react";

export const Account = () => {
    const [balance, setBalance] = useState(500)

    const increment = () => setBalance(balance => balance + 100)
    const decrement = () => setBalance(balance => balance - 100)

    return (
        <div>
            <p>Account balance: {balance <= 0 ? <span>You are broke! :-(</span> : <span>{balance}</span>}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
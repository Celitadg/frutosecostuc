import { useState } from "react"; 
import Logo from "./img/sport-mix.jpg";
import AddToCart from "./AddToCart";

export default function ItemCount ({ stock, initial }) {

    const [count, setCount] = useState (initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count-1)
        }
    }

    return(
        <div className="card">  
            <h2>Sport Mix</h2>
            <img src={ Logo } alt="Sport Mix" />
            <p>$610/kg</p>
            <button onClick = { sumar }>+</button>
            <button onClick = { restar }>-</button>
            <p>{ count }</p>
            <AddToCart count={count}/>
        </div>
    )

    }

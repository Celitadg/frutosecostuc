import { useState } from "react"; 
import { Link } from "react-router-dom";

export default function ItemCount ({ stock }) {

    const [count, setCount] = useState (0)
    const [showAddButton, setShowAddButton] = useState (true)

    const add = () => {
        if (count > 0) {
        console.log(`se añadió ${count} al carrito`)
        setShowAddButton (false)
        }
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count+1)
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count-1)
        }
    }


    return(
        <div>  
            {showAddButton && 
            <div>
                <button onClick = { sumar }>+</button>
                <button onClick = { restar }>-</button>
                <p>{ count }</p>
                <button onClick = { add }>Añadir al carrito</button>
            </div>}
            {!showAddButton && <Link to='/cart'><button>Terminar mi compra</button></Link>}
        </div>
    )

    }

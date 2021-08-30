import { useContext, useState } from "react"; 
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContex";


export default function ItemCount ({ stock, title, product }) {

    const myCart = useContext (CartContext)
    console.log(myCart)

    const [count, setCount] = useState (0)
    const [showAddButton, setShowAddButton] = useState (true)

    const add = () => {
        if (count > 0) {
        /* console.log(`se añadió ${count} ${title} al carrito`) */
        setShowAddButton (false)
        myCart.addItem(product, count)
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

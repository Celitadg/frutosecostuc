import { useContext, useState } from "react"; 
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContex";


export default function ItemCount ({ stock, product }) {

    

    const myCart = useContext (CartContext)
    console.log(myCart)

    const [count, setCount] = useState (0)
    const [showAddButton, setShowAddButton] = useState (true)

    const add = () => {
        if (count > 0) {
        setShowAddButton (false)
        myCart.addItem(product, count)
        }
    }

    const volver = () => {
        setShowAddButton (true)
        myCart.removeItem(product)
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
            <>
                <button onClick = { sumar }>+</button>
                <button onClick = { restar }>-</button>
                <p>{ count }</p>
                <button onClick = { add }>Añadir al carrito</button>
            </>}
            {!showAddButton && 
            <>
                <Link to='/cart'><button>Terminar mi compra</button></Link>
                <button onClick = { volver }>Atrás</button>
            </>  }
        </div>
    )

    }

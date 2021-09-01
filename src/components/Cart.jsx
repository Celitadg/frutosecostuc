import { useContext } from "react"
import { CartContext } from "./context/CartContex"
import { Link } from "react-router-dom"





export default function Cart() {
    const {compras, removeItem, clear } = useContext (CartContext)

    const precioTotal = compras.reduce((acumulado, compra)=> acumulado + (compra.price * compra.cantidad), 0)
    

    return(
        <>
            <h1>Mi Carrito</h1>
            {(compras.length===0) ? <p>Tu carrito está vacío, para encontrar productos <Link to='/'>clickeá acá</Link></p> 
                                    :compras.map(element => <div><Link to={`/item/${element.id}`}><h3>{element.title}</h3></Link>
                                        <p>{element.cantidad}</p>
                                        <p>${(element.price)*(element.cantidad)}</p>
                                        <button onClick={()=> removeItem(element)}>Eliminar</button>
                                    </div>)}
            <button onClick={()=> clear()}>Vaciar Carrito</button>
            <div>${precioTotal}</div>
            
        </>
    )
}
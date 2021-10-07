import { CartContext } from "./context/CartContex"
import { useContext } from "react"

export default function Order() {
    
    const { newOrder, id } = useContext (CartContext)
    return(
        <>
            <h3>¡Gracias por su compra!</h3>
            <p>Id: {id}</p>
            <p>Fecha: {newOrder.date}</p>
            <h4>Detalle de su orden:</h4>
            <p>
                {newOrder.compras.map(elem => 
                            <div>
                            {elem.title} - ${elem.price} | {elem.cantidad} Unidades
                            </div>
                        )}
            </p>
            <h4>Total: ${newOrder.totalPrice}</h4>
        </>
    )
}

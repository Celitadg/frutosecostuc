import { CartContext } from "./context/CartContex"
import { useContext } from "react"

export default function Order() {

    const { compras, precioTotal } = useContext (CartContext)
    return(
        <>
            <h3>¡Gracias por su compra!</h3>
            <h4>Detalle de su orden:</h4>
            <p>
                {compras.map(elem => 
                            <div>
                            {elem.title} - ${elem.price} | {elem.cantidad} Unidades
                            </div>
                        )}
            </p>
            <h4>Total: ${precioTotal}</h4>
        </>
    )
}
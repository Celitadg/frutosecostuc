import { useContext } from "react"
import { CartContext } from "./context/CartContex"
import { Link, useHistory } from "react-router-dom"
import { Firebase } from "../firebase"


export default function Cart() {
    const {compras, removeItem, clear, precioTotal, newOrder } = useContext (CartContext)
    const history = useHistory();

    const handlePurchase = () => {
        compras.forEach(item => {
            newOrder.compras.push(item);
        });
        newOrder['totalPrice'] = precioTotal;
        console.log(newOrder);
    
        Firebase.add('orders', newOrder).then(res => {
            newOrder['id']= res.id 
            history.push("/order")
        });
    };
    

    return(
        <>
            <h2>Mi Carrito</h2>
            <section className='carrito'>

                <div>
                    {(compras.length===0) ? <p>Tu carrito está vacío, para encontrar productos <Link to='/'>clickeá acá</Link></p> 
                                            :compras.map(element => <div><Link className='links' to={`/item/${element.id}`}><h3>{element.title}</h3></Link>
                                                <p>Cantidad: {element.cantidad} x ${element.price}</p>
                                                <p>Subtotal: ${(element.price)*(element.cantidad)}</p>
                                                <button onClick={()=> removeItem(element)}>Eliminar</button>
                                            </div>)}
                </div>       
                <div>    
                {(compras.length===0) ? <></> : 
                <><button onClick={()=> clear()}>Vaciar Carrito</button>
                <h4>Total: ${precioTotal}</h4></>}
                <button onClick={handlePurchase}>Comprar</button>
                </div>
            </section>
        </>
    )
}





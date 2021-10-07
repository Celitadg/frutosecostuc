import React, { createContext, useState } from "react"

export const CartContext = createContext([]) 

export default function CartContextProvider ({children}) {

    const [compras, setCompras] = useState([])
    const [id, setId] = useState('')
    const [newOrder, setNewOrder] = useState({
        buyer: {
            name: 'Juan Pérez',
            phone: '+54 9 9999-9999',
            email: 'juanperezl@gmail.com'
        },
        compras: [],
        totalPrice: '',
        date: new Date().toString(),
    });
    
    function isInCart(compra){
        if (compras?.find(prod => prod.id === compra.id)){
            return true
        }

    }


    function addItem(compra, quantity){
        if (isInCart(compra)) {
            compras.map(prod => {
                if (prod.id === compra.id) {
                alert(`Ya añadiste ${compra.title} a tu carrito, presiona "atrás" y selecciona la cantidad total de ${compra.title} que deseas.`)
                }
            })
        } else {
            setCompras([...compras, {...compra, cantidad:quantity}])
        }
    }
    

    function removeItem(compra){
        const eliminado = compras.filter((prod) =>
            prod.id !== compra.id
        )
        setCompras(eliminado)
    }

    function clear(){
        setCompras ([])
    }

    const precioTotal = compras.reduce((acumulado, compra)=> acumulado + (compra.price * compra.cantidad), 0)

    return(
        <>
            <CartContext.Provider value={{compras, addItem, removeItem, clear, precioTotal, newOrder, setNewOrder, id, setId}}> 
                {children}
            </ CartContext.Provider>
        </>
    )
}
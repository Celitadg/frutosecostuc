import React, { createContext, useState, useMemo } from "react"

export const CartContext = createContext([]) 

export default function CartContextProvider ({children}) {

    const [compras, setCompras] = useState([])
    
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

    const value = useMemo(()=>{
        return({
            compras, addItem, removeItem, clear, precioTotal
        })
    }, [compras])
        

    return(
        <>
            <CartContext.Provider value={value}> 
                {children}
            </ CartContext.Provider>
        </>
    )
}
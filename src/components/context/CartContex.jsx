import React, { useState, useMemo } from "react"


export const CartContext = React.createContext([]) 

export default function CartContextProvider ({children}) {

    const [compras, setCompras] = useState([])

    function addItem(compra, quantity){
        
        compra.id === compras.id ?
            alert(`Ya añadiste ${compra.title} a tu carrito`) :
            setCompras([...compras, {...compra, cantidad:quantity}])

    }

    function removeItem(id){
        
        compras.filter((compra)=>{
            return compra.id !== id
        })
    }

    function clear(){
        setCompras ([])
    }

    function isInCart(compra){

        if (compra.id !== compras.id ){
        setCompras ([...compras, compra]) 
        } 
    }

    const value = useMemo(()=>{
        return({
            compras, addItem, removeItem, clear /* isInCart */
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
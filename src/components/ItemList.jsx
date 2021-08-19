import { useState, useEffect } from "react"
import Item from "./Item"
import {products} from "./Api/Products"



export default function ItemList() {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const itemList = () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2000)
            })
        }
        itemList().then((prod) => setProductos(prod))
    }, [productos])

    return(
        <>
        { productos.map(item => <Item key={item.id} title={item.title} picture={item.picture} description={item.description} price={item.price} />) }
        </>
    )
}
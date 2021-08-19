import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail';
import {products} from "./Api/Products"



export default function ItemDetailContainer() {
    const [prod, setProd] = useState()

    useEffect(() => {
        const getItem = () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products[3])
                }, 2000)
            })
        }
        getItem().then((prod) => setProd(prod))
    }, [prod])

    return(
        <>
        
        { prod && <ItemDetail key={prod.id} title={prod.title} description={prod.description} price={prod.price} picture={prod.picture} /> }

        </>
    )
}

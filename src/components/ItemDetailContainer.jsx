import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail';
import {products} from "./Api/Products"
import { useParams } from "react-router";



export default function ItemDetailContainer() {

    const {id} = useParams()
    const [prod, setProd] = useState()

    useEffect(() => {
        const getItem = () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products[`${id-1}`])
                }, 2000)
            })
        }
        getItem().then((prod) => setProd(prod))
    }, [prod])

    return(
        <>
        
        { prod && <ItemDetail key={prod.id} title={prod.title} description={prod.description} price={prod.price} picture={prod.picture} stock={prod.stock}/> }

        </>
    )
}

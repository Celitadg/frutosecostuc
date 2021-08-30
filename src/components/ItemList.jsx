import { useState, useEffect } from "react"
import Item from "./Item"
import {products} from "./Api/Products"
import { Link } from 'react-router-dom'



export default function ItemList() {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const itemList = () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)
                }, 2)
            })
        }
        itemList().then((prod) => setProductos(prod))
    }, [productos])

    return(
        <div className="container">
            <div className='container-items'>
                { productos.map(item => <Link className='links' to={`/item/${item.id}`}><Item key={item.id} title={item.title} picture={item.picture} description={item.description} price={item.price} /></Link> ) }
            </div>
        </div>
    )
}
import { useState, useEffect } from "react"
import Item from "./Item"
import { Link } from 'react-router-dom'
import { Firebase } from "../firebase"

export default function ItemList() {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        Firebase.getAll('products').then(docs => {
            const arr = [];
            docs.forEach(item => {
            const data = item.data();
            arr.push({
                    key:item.id,
                    id:item.id,
                    title:data.title,
                    price:data.price,
                    stock:data.stock,
                    picture:data.picture, 
                    description:data.description
                }
                );
            });
            setProductos(arr);
        });
    }, [productos]);
    

    return(
        <div className="container">
            <div className='container-items'>
                { productos.map(item => <Link className='links' to={`/item/${item.id}`}><Item key={item.id} title={item.title} picture={item.picture} description={item.description} price={item.price} /></Link> ) }
            </div>
        </div>
    )
}
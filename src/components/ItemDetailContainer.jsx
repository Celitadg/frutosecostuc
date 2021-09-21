import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail';
import { useParams } from "react-router";
import { Firebase } from "../firebase";



export default function ItemDetailContainer() {

    const {id} = useParams()
    const [prod, setProd] = useState()

    useEffect(() => {
        Firebase.get(`products/${id}`).then(res => {
            const item = res.data();
            setProd({
                id:id,
                title:item.title,
                price:item.price,
                stock:item.stock,
                picture:item.picture,
                }
            );
        });
    }, [prod]);


    return(
        <>
        
        { prod && <ItemDetail product={prod} key={prod.id} title={prod.title} description={prod.description} price={prod.price} picture={prod.picture} stock={prod.stock}/> }

        </>
    )
}

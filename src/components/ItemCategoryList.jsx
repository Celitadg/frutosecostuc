import Item from "../components/Item";
import React, {useEffect, useState} from "react";
import { Firebase } from "../firebase";
import { Link } from "react-router-dom";

export default function ItemCategoryList() {
    
    const [itemsCategory, setItemsCategory] = useState([]);

    useEffect(() => {
        Firebase.getAll('products', {
            field: "category",
            condition: "==",
            value: "sinpasas"}).then(docs => {
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
        setItemsCategory(arr);
        });
    }, [itemsCategory]);

    return(
        <div className='container-items'>  
            { itemsCategory.map(item => <Link className='links' to={`/item/${item.id}`}><Item key={item.id} title={item.title} picture={item.picture} description={item.description} price={item.price} /></Link> ) }
        </div>
    )
}



import ItemCount from "./ItemCount"



export default function ItemDetail({ title, description, price, picture, stock }) {

    return(
            <div className="item-detail">
                <h2>{title}</h2>
                <img src={ picture } alt= { title } />
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock={stock} />
            </div>
    )
}

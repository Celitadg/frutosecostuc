import ItemCount from "./ItemCount"



export default function ItemDetail({ title, description, price, picture, stock, product }) {

    return(
        <div className='container-item-detail'>
            <div className="item-detail">
                <h2>{title}</h2>
                <img src={ picture } alt= { title } />
                <p>{description}</p>
                <p>${price}/Kg</p>
                <ItemCount stock={stock} title={title} product={product} />
            </div>
        </div>
    )
}

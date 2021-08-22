



export default function Item({ title, description, price, picture, }) {
    return(
            <div className="item">
                <h2>{title}</h2>
                <img src={picture} alt={title} />
                <p>{description}</p>
                <p>{price}</p>
            </div>
    )
}
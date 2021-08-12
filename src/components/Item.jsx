



export default function Item({ title, description, price  }) {
    return(
            <div className="item">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
    )
}
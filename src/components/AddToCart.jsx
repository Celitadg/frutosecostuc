


export default function AddToCart({count}) {

    const add = () => {
        if (count > 0) {
            console.log(`Se añadió ${count} Sport Mix al carrito`)
        }
    }

    return(
        <>
            <button onClick = { add }>Añadir al carrito</button>
        </>
    )
}
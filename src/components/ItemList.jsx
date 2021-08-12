import Item from "./Item"


export default function ItemList() {
    
    const items = [
        {
            id: 1,
            title: "Sport Mix sin pasas",
            description: "Nueces, almendras, castañas de cajú, maní, chips de banana",
            price:"$840/Kg",
        },
        {
            id: 2,
            title: "Sport Mix",
            description: "Nueces, almendras, castañas de cajú, maní, chips de banana, pasas de uva morochas",
            price: "$610/Kg",
        },
        {
            id: 3,
            title: "Mix Mediterraneo sin pasas",
            description: "Nueces, almendras, castañas de cajú, maní",
            price: "$830/Kg",
        },
        {
            id: 4,
            title: "Mix Mediterraneo",
            description: "Nueces, almendras, castañas de cajú, maní, pasas de uva rubias, pasas de uva morochas",
            price: "$690/Kg",
        },
        {
            id: 5,
            title: "Mix Clásico + Cereales",
            description: "Nueces, almendras, maní, pasas de uva morochas, copos sin azúcar",
            price: "$490/Kg",
        },
        {
            id: 6,
            title: "Mix Clásico",
            description: "Nueces, almendras, maní, pasas de uva morochas",
            price: "$510/Kg",
        },
        {
            id: 7,
            title: "Snack Mix Premium",
            description: "Nueces, almendras, castañas de cajú, pasas de uva rubias, pasas de uva morochas",
            price: "$790/Kg",
        },
        {
            id: 8,
            title: "Snack Mix Especial",
            description: "Nueces, almendras, pasas de uva rubias, pasas de uva morochas",
            price: "$740/Kg",
        },
        {
            id: 9,
            title: "Snack Mix",
            description: "Nueces, pasas de uva rubias, pasas de uva morochas",
            price: "$680/Kg",
        },
        
    ]


    const itemList = items.map(item => <Item title={ item.title } description={ item.description } price={ item.price }/>)
    return(
        <>
            {itemList}
        </>
    )
}
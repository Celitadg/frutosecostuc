import CartWidget from "./CartWidget";


export default function NavBar() {
    return(
        <header>
            <h1><a href="#">Frutos Secos Tuc</a></h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#"><CartWidget /></a>
            </nav>
        </header>
    )
}
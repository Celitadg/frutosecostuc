import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {
    return(
        <header>
            <h1><Link to='/'>Frutos Secos Tuc</Link></h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Productos</Link>
                <Link to="/cart"><CartWidget /></Link>
            </nav>
        </header>
    )
}
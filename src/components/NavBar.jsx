import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "./context/CartContex"


export default function NavBar() {
    const {compras } = useContext (CartContext)
    return(
        <header>
            <h1><Link to='/'>Frutos Secos Tuc</Link></h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Productos</Link>
                {(compras.length!==0) ? <Link to="/cart"><CartWidget /></Link>: <></>}
            </nav>
        </header>
    )
}
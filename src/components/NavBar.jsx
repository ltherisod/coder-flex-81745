import "../assets/css/NavBar.css"
import CartWidget from "./CatWidget"
import { NavLink } from "react-router-dom"

const NavBar = ()=> {
   
    return(
        <nav className='nav-container'>
            <NavLink className="anchor-nav" to="/">
                <img src='../vite.svg' alt='logo'/>
            </NavLink>
            <NavLink className="anchor-nav" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="anchor-nav" to="/category/ofertas">Ofertas</NavLink>
            <NavLink className="anchor-nav" to="/category/mas vendidos">Mas Vendidos</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
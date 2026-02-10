import "../assets/css/NavBar.css"
import CartWidget from "./CatWidget"

const NavBar = ()=> {
   
    return(
        <nav className='nav-container'>
            <a className="anchor-nav" href="">
                <img src='../vite.svg' alt='logo'/>
            </a>
            <a className="anchor-nav" href="">Nuevos</a>
            <a className="anchor-nav" href="">Ofertas</a>
            <a className="anchor-nav" href="">Mas Vendidos</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
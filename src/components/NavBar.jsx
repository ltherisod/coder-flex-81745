import "../assets/css/NavBar.css"
//imagen dentro de SRC hay que importarla
import logoSrc from "../assets/react.svg"
import CartWidget from "./CatWidget"

const NavBar = ()=> {
    console.log('NavBar')
    return(
        <nav className='nav-container'>
            <a className="anchor-nav" href="">
                {/* imagen en SRC */}
                {/* <img src={logoSrc} alt='logo'/> */}
                {/* IMAGEN EN public */}
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
import { NavLink } from "react-router-dom";

import './NavBar.css'
import Logo from'../img/logo/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navabr_image">
                <NavLink to="/">
                        <img
                    src={Logo}
                    className="logo-img"
                    alt="logo"/>
                </NavLink>
            </div>

            <div className="navbar__li">
                    <ul className="navbar__li__items">
                        <NavLink className="hover-3" to="/">Início</NavLink>
                        <NavLink className="hover-3" to="/construcao">Sobre</NavLink>
                        <NavLink className="hover-3" to="/construcao">Serviços</NavLink>
                        <NavLink className="hover-3" to="/construcao">Contato</NavLink>
                        <a href="https://www.google.com/" className="hover-3">Blog</a>
                    </ul>
            </div>
            
        </nav>
    )
}

export default NavBar;
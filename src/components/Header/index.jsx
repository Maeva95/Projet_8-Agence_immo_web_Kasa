import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/LOGO_home.png'
import '../Header/Header.module.css'


export default function Header() {
    return (
        <header>
            <nav>
                <img src={`${logoHeader}`} alt='logo Kasa'/>
                <ul className="nav-list">
                    <li className="nav-link">
                        <NavLink to='/'>Accueil</NavLink>
                        <NavLink to='/about'>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
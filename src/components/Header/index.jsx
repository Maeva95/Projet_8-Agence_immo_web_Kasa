import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/LOGO_home.png'
import '../../../style.css'


export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={`${logoHeader}`} alt='logo Kasa' className='nav__logo'/>
                <ul className='nav__liste'>
                    <li>
                        <NavLink to='/'>Accueil</NavLink>
                        <NavLink to='/about'>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
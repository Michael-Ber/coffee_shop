import {Link} from 'react-router-dom';
import icon from './2beans.svg';
import './header.scss';

const Header = () => {
    return (
        <header className = 'header'>
            <Link to = '/' className = 'header__link'>
                <img src={icon} alt="Beans" />
                Coffee house
            </Link>
            <Link to = '/OurCoffee' className = 'header__link'>
                Our coffee
            </Link>
            <Link to = 'ForYourPleasure' className = 'header__link'>
                For your pleasure
            </Link>
        </header>
    )
}

export default Header;
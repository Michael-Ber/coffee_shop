import './coffee-list-item.scss';
import {Link} from 'react-router-dom';

const CoffeeListItem = (props) => {
    const {img, alt, name, country, cost} = props;
    return (
            <li className = 'coffee-list-item'>
                <img src={img} alt={alt} className="coffee-list-item-img"/>
                <Link to = {`/${name}`} className = 'coffee-list-item-link'>
                    <span className = "coffee-list-item-name">{name}</span>
                </Link>
                <span className = "coffee-list-item-country">{country}</span>
                <span className = "coffee-list-item-cost">{cost + '$'}</span>
            </li>
        
        
    )
}

export default CoffeeListItem;
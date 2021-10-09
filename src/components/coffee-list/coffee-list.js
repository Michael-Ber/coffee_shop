import CoffeeListItem from '../coffee-list-item/coffee-list-item';
import './coffee-list.scss';

const CoffeeList = (props) => {
    const {data} = props;
    const elems = data.map(item => {
        const {img, alt, name, country, cost, id} = item;
        return (
            <CoffeeListItem 
                key={id}
                img={img} 
                alt={alt} 
                name={name} 
                country={country} 
                cost={cost} 
                id={id}/>
        )
    })
    return (
        <ul className = "coffee-list">
            {elems}
        </ul>
    )
}

export default CoffeeList;
import './ourbest.scss';

const Ourbest = (props) => {
    const {data} = props;
    const elems = data.map(item => {
        const {img, alt, name, cost, id} = item;
        return (
            <li key={id} className = 'ourbest__list-item'>
                <img src={img} alt={alt} className="ourbest__list-item-img"/>
                <span className = 'ourbest__list-item-name'>{name}</span>
                <span className = 'ourbest__list-item-cost'>{cost + '$'}</span>
            </li>
        )
    })
    return (
        <section className="ourbest">
            <h2 className="ourbest__title">Our best</h2>
            <ul className = 'ourbest__list'>
                {elems}
            </ul>
        </section>
    )
}

export default Ourbest;
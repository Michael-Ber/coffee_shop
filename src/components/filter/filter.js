import './filter.scss';

const Filter = () => {
    return (
        <div className="filter">
            <span>Or filter</span>
            <button className="filter__btn">Brazil</button>
            <button className="filter__btn">Kenya</button>
            <button className="filter__btn">Columbia</button>
        </div>
    )
}

export default Filter;
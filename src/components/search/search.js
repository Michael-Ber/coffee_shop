import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <label>
                Looking for
                <input type="text" placeholder="start typing here..." className="search__input"/>
            </label>
        </div>
    )
}

export default Search;
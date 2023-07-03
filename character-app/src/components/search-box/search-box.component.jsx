import '../search-box/search-box.style.css'

const SearchBox = (props) => (
      <div>
        <i className={`fas fa-search searchicon`} />
        <input
        className={`searchbox ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        />
      </div>
      
    );


export default SearchBox;
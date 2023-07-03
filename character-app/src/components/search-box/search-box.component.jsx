import '../search-box/search-box.style.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <i className={`fas fa-search searchicon`} />
    <input
      className={`searchbox ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);


export default SearchBox;
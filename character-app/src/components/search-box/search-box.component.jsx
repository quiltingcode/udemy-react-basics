import { Component } from 'react';
import '../search-box/search-box.style.css'

class SearchBox extends Component {
  render() {
    return (
      <div>
        <i className={`fas fa-search searchicon`} />
        <input
        className={`searchbox ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
        />
      </div>
      
    );
  }
}

export default SearchBox;
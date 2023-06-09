import { Component } from "react";

class SearchBar extends Component{

    render(){
        const {onSearchChange}= this.props
        return(
            <input className='search-box' type='search' placeholder='search Monsters'
          onChange={onSearchChange } />
        )
    }
}


export default SearchBar
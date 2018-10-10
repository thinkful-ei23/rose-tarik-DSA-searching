import React from 'react';
import linearSearch from './linearSearch';

// 1 input, 2 submit buttons
// linear search 
// binary search 

export default class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        count: 0, //hold number of iterations to find an item in the dataset
        searchVal: 0 //value that user searches for 
      }
  }

  setVal(e) {
    console.log(e.target.value);
    this.setState({
      searchVal: e.target.value
    });
  }

  linearSearch() {
    const searchVal = this.state.searchVal;
    linearSearch(this.props.arr, searchVal);
  }

  render() {
    return (
      <div className="ui">
        <form className="search" id="search">
          <input 
            type="number" 
            className="searchVal" 
            id="searchVal" 
            name="searchVal" 
            onChange={ (e) => (this.setVal(e)) }/>
          <button 
            type="button"
            name="linear-search"
            onClick={ () => (this.linearSearch())}
          >Linear Search</button>
          
        </form>
      </div> 
    )
  }


}
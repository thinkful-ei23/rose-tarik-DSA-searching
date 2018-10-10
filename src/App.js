import React from 'react';
import linearSearch from './linearSearch';
import binarySearch from './binarySearch';

// 1 input, 2 submit buttons
// linear search 
// binary search 

export default class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        message: '', //displays message from search result
        searchVal: 0 //value that user searches for 
      }
  }

  setVal(e) {
    this.setState({
      searchVal: e.target.value
    });
  }

  linearSearch() {
    const searchVal = Number(this.state.searchVal);

    const searchResult = linearSearch(this.props.arr, searchVal);
    let message;

    if (searchResult.index === -1) {
      message = `Value not found. The search ran '${searchResult.count}' times.`;
    }
    else {
      message = `Value found at index '${searchResult.index}'. The search ran '${searchResult.count}' time(s).`;
    }

    this.setState({
      message
    });
  }

  binarySearch() {
    let sortedArr = [...this.props.arr].sort((a,b) => a-b);
    const searchVal = Number(this.state.searchVal);

    const searchResult = binarySearch(sortedArr, searchVal);
    let message;

    if (searchResult.index === -1) {
      message = `Value not found. The search ran '${searchResult.count}' times.`;
    }
    else {
      message = `Value found at index '${searchResult.index}'. The search ran '${searchResult.count}' time(s).`;
    }
    
    this.setState({
      message
    });
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
            onChange={(e) => (this.setVal(e)) }/>
          <button 
            type="button"
            name="linear-search"
            onClick={() => (this.linearSearch())}
          >Linear Search</button>
          <button 
            type="button"
            name="binary-search"
            onClick={() => (this.binarySearch())}
          >Binary Search</button>
        </form>
        <section className="search-results">
          <p>
            {this.state.message}
          </p>
        </section>
      </div> 
    )
  }


}
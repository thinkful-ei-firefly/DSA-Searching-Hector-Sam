import React from 'react';
import data from './data'

class SearchForm extends React.Component {

  state = {
    input: null,
    counter: null,
    notFound: false,
    data: data,
    sortedData: null
  }

  componentDidMount() {
    const sortedData = data.sort();
    this.setState({ sortedData })
  }

  handleBinarySearch = (array, n, start=0, end=array.length-1, count=1) => {
    n = Number(n)
    const mid = Math.floor((start+end)/2)
    console.log('mid is '+mid)
    const value = array[mid]
    console.log('value is '+value)
    if (start === end && value !==n) {
      return this.setState({ counter: null, notFound: true })
    }
    if (value === n) {
      console.log(count)
      return this.setState({ counter: count, notFound: false })
    }
    if (value > n) {
      return this.handleBinarySearch(array, n, mid-1, 0, count+1)
    }
    if (value < n) {
      return this.handleBinarySearch(array, n, end, mid+1, count+1)
    }
  }

  handleLinearSearch = (array, n) => {
    n = Number(n)
    let i = 0;
    while (array[i] !== n && i<array.length) {
      i++
    }
    if (array[i] === n) {
      this.setState({ counter: i, notFound: false })
    } else {
      this.setState({ counter: null, notFound: true })
    }
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div className='SearchForm'>
        <form>
          <input onChange={(event) => this.handleInputChange(event)}type='text' name='searchTerm'></input>
          <button type='button' onClick={() => this.handleLinearSearch(this.state.data, this.state.input)}>Linear Search</button>
          <button type='button' onClick={() => this.handleBinarySearch(this.state.sortedData, this.state.input)}>Binary Search</button>
        </form>
        <div className='result'>
          {this.state.counter ? `The number was found in ${this.state.counter} searches` : ''}
          {this.state.notFound ? 'That number was not found' : ''}
        </div>
      </div>
    )
  }
}

export default SearchForm
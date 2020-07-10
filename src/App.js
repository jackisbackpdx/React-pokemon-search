import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

import Search from './components/Search'
import Results from './components/Results'
import LoadMore from './components/LoadMore'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        pokemon: [],
        searched: [],
        fullRes: [],
        s: '',
        amount: 100,
        dataSet: false,
        disabled: true,
    }
    this.handleInput = this.handleInput.bind(this);
}

componentDidMount() {
  let res = [];
  for(let i = 1; i < 807; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => {
      res.push(response.data)
      if (i === 806) {
        res.sort(function (a, b) {
          return a['id'] - b['id']
        })
        this.setState({fullRes: res})
      }
    })
  }
}

  handleInput(e) {
    let s = e.target.value;

    let searched = []
    this.state.fullRes.forEach(res => {
      if(res.name.includes(s.toLowerCase())) {
        searched.push(res)
      }
    })
    this.setState({
      searched: searched,
      s: s
    })
  }

  render() {    
    return (
      <div className='main'>
        <Search value={this.state.s} handleInput={this.handleInput}/>
        {this.state.s.length > 0 ? <Results data={this.state.searched}/> : <Results data={this.state.fullRes}/>}
        <br/>
        <LoadMore handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;

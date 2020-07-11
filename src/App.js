import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Search from './components/Search'
import Results from './components/Results'
import Header from './components/Header'
import LoadMore from './components/LoadMore'
import Popup from './components/Popup'

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
        chosen: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.choosePokemon = this.choosePokemon.bind(this);
    this.pokeBallClick = this.pokeBallClick.bind(this);
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

        let limited = [];
        for(let i = 0; i < this.state.amount; i++) {
          limited.push(res[i])
        }
        this.setState(prevState => ({
          pokemon: limited,
          amount: prevState.amount + 100
        }))
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

  handleClick() {
    if(this.state.amount < 900) {
      let pokemon = this.state.fullRes;
      let limited = [];
      for(let i = 0; i < this.state.amount; i++) {
        limited.push(pokemon[i])
      }
      this.setState(prevState =>({
        pokemon: limited,
        amount: prevState.amount + 100
      }))
    }
  }

  choosePokemon(e) {
    let outOne;
    if(e.target.className === 'pokemon-card') {
      outOne = e.target;
    }
    if (e.target.className !== 'pokemon-card') {
      outOne = e.target.parentElement;
      if (outOne.className !== 'pokemon-card') {
        outOne = e.target.parentElement.parentElement;
      } 
    }
    let chosenName = outOne.querySelector('h3').textContent.toLowerCase();
    let chosenObject;
    this.state.fullRes.forEach(pokemon => {
        if (pokemon.name === chosenName) {
            chosenObject = pokemon;
            console.log(chosenObject)
        }
    })

    this.setState({chosen: chosenObject})
  }

  close() {
    this.setState({chosen: ''})
  }

  pokeBallClick() {
    this.setState({s: ''})
  }

  render() {

    return (
      <div className='main'>
        <Header reset={this.pokeBallClick}/>
        <Search value={this.state.s} handleInput={this.handleInput}/>
        {this.state.s.length > 0 ? 
        <Results 
          choosePokemon={this.choosePokemon} 
          data={this.state.searched}/> : 
        <Results
          choosePokemon={this.choosePokemon}
          data={this.state.pokemon}/>}
        <LoadMore handleClick={this.handleClick}/>
        {(this.state.chosen !== '') ? <Popup close={() => this.close()} toDisplay={this.state.chosen}/> : null}
        <br/>
      </div>
    );
  }
}

export default App;

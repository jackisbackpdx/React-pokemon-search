import React from 'react'
import checkType from '../functions/check-type'
import firstLetter from '../functions/first-letter'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            image: '',
            type: ''
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
        this.state.fullRes.forEach(res => {
            console.log(res)
            if (res.name === chosenName) {
                chosenObject = res;
                console.log(chosenObject)
            }
        })

        this.setState({chosen: chosenObject})
      }
    
        
render() {
    let type = this.props.type;
    let color = checkType(type);
    let upperCasedType = type.toUpperCase();
    let upperCasedName = firstLetter(this.props.name);

        return (
            <div className='pokemon-card' onClick={this.props.choosePokemon}>
                <img src={this.props.image} alt=''/>
                <div>
                    <p style={{backgroundColor: color}}>{upperCasedType}</p>
                    <h3>{upperCasedName}</h3>
                </div>
            </div>
        )
    }
}

export default Pokemon
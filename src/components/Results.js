import React, {Component} from 'react'
import Pokemon from './Pokemon'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
            types: [],
            images: [],
            amount: 100
        } 
    }

    makePokemon() {
        return this.props.data.map(item => {
            return <Pokemon name={item.name} type={item.types[0].type.name} image={item.sprites.front_default}/>
        })   
    }

    render() {
        console.log(this.props.data)
        return (
            <div className='container'>
                {this.makePokemon()}
            </div>
        )
    }
}


export default Results

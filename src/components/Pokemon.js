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
        
render() {
    console.log(this.props.name)
    let type = this.props.type;
    let color = checkType(type);
    let upperCasedType = type.toUpperCase();
    let upperCasedName = firstLetter(this.props.name);
    console.log(upperCasedType);
    console.log(upperCasedName);

        return (
            <div className='pokemon-card'>
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
import React from 'react'

import Abilities from './Abilities'
import Moves from './Moves'
import firstLetter from '../functions/first-letter'

export default function Popup(props) {
    return (
        <div className='popup'>
            <div className='main-disp'>
                <h1>{firstLetter(props.toDisplay.name)}</h1>
                <img src={props.toDisplay.sprites.front_default} alt=''/>
                <p>Pokedex #{props.toDisplay.id}</p>
            </div>
            <button type='button' className='close' onClick={props.close}>X</button>

            <h2>Abilities:</h2>
            <div className='abilities'>
                {props.toDisplay.abilities.map(ability => {
                    let str = ability.ability.name
                    return <Abilities text={str}/>
                })}
            </div>

            <h2>Moves:</h2>
            <div className='moves'>
                <br/>
                {props.toDisplay.moves.map(move => {
                    let str = move.move.name
                    return <Moves text={str}/>
                })}
            </div>
        </div>
    )
}

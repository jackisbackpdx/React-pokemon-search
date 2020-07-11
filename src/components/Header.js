import React from 'react'

export default function Header(props) {
    return (
        <div className='header'>
            <h1>POKEDEX SEARCH</h1>
            <img src='https://i.imgur.com/8KmjoEg.png' onClick={() => props.reset()}/>
        </div>
    )
}

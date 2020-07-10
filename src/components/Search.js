import React from 'react'

export default function Search(props) {
        return (
           <input 
           type='text' 
           className='search' 
           placeholder='search'
           onChange={props.handleInput}
           />
        )
}
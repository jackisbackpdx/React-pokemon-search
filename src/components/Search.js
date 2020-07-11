import React from 'react'


export default function Search(props) {
        return (
           <input  
           type='text' 
           className='search md-form active-cyan active-cyan-2 mb-3' 
           placeholder='Search'
           onChange={props.handleInput}
           disabled={props.disabled}
           value={props.value}
           />
        )
}
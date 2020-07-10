import React from 'react'

export default function LoadMore(props) {
    return (
        <input type='submit' className='load-more' value='Load More' onClick={props.handleClick}/>
    )
}

import React from 'react'

function LoadMore(props) {
    return (
        <button 
        type='submit' 
        onClick={props.handleClick}
        className='load-more btn btn-primary'
        >Load More</button>
    )
}

export default LoadMore

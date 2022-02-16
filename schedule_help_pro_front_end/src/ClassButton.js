import React from 'react'

function ClassButton(props){

    return(
        <input 
            type='button'
            value={props.caption}/>
    );
}

export default ClassButton;
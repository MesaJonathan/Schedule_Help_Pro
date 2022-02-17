import React from 'react'

function ClassButton(props){

    return(
        <input 
            type='button'
            value={props.caption}
            onClick={props.onClick}/>
    );
}

export default ClassButton;
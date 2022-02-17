import React from 'react'
import ClassButton from './ClassButton'

function ClassList(props) {
    const names = [
        {text: "bio", handler: ()=> props.classClicked("bio")},
        {text: "math", handler: ()=> props.classClicked("math")},
        {text: "English", handler: ()=> props.classClicked("English")},
        {text: "history", handler: ()=> props.classClicked("history")}
    ];

    const classButtons = names.map((value, index) =>{
        return <ClassButton 
        caption={value.text}
        onClick={value.handler} />
    });

    return(
        <div className='class-list-view'>
            <ClassList text={props.result}/>
            {classButtons}
        </div>
    )
}

export default ClassList;
import React from 'react'
import ClassButton from './ClassButton'

function ClassList(props) {
    const classNames = ["bio", "math", "english", "balls class"];

    const classButtons = classNames.map((value, index) =>{
        return <ClassButton classNames={value}/>
    });

    return(
        <div>
            {classButtons}
        </div>
    )
}

export default
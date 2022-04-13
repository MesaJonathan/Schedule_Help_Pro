import React from 'react'
import './Course.css'

function Course({course}) {
    return(
        <div className='class-list-view'>
            <button color="blue">
                <h3>{course.name} ({course.code})</h3>
                {course.pres} <br/>
                Description: {course.desc} 
		    </button>
        </div>
    )
}

export default Course
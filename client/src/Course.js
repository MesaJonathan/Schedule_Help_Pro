import React from 'react'

function Course({course}) {
    return(
        <button color="blue">
						<h3>Class name: {course.name} ({course.code})</h3>
						{course.pres} <br></br>
						Description: {course.desc} 
		</button>
    )
}

export default Course
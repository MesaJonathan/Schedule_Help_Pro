import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Course.css'

function Course({course}) {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/classview'
        navigate(path, {state:{course: course}})
    }

    return(
        <div className='class-list-view'>
            <button onClick={routeChange}>
                <h3>{course.name} - ({course.code})</h3>
		    </button>
        </div>
    )
}

export default Course
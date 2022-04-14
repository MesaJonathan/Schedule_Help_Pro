import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ClassView.css' 
//import { syllabusScrape } from '../webscraper';

function ClassView() {

    //for getting the course that was selected
    const location = useLocation();
    const course = location.state.course

    //for getting the schedule using web scraping
    //const link = syllabusScrape(course)


    return(
        <div className='course'>
            <h1>{course.name} ({course.code})</h1>
            <h2>Course Syllabus:  {}</h2>
            <h2>{course.pres}</h2>
            <h2>Course ID: {course.id}</h2>
            <h2>Description:</h2>
            <h3>{course.desc}</h3>
            <Link to='/classlist'><p>Return to Class List</p></Link>
        </div>
    )
}

export default ClassView
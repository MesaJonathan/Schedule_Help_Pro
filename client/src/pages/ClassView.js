import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ClassView.css' 

function ClassView() {
    const [link, setLink] = useState('')


    //for getting the course that was selected
    const location = useLocation();
    const course = location.state.course

    const [name, setName] = useState(course.name)
    const [code, setCode] = useState(course.code)

    //for getting the schedule using web scraping
    useEffect(() => {
        const axios = require('axios');

        // set up the request parameters
        const params = {
        api_key: "2DC84D7F080A4D34A75BACFD0AE6A5AB",
        q: name + " " + code + " uf syllabus"
        }

        // make the http GET request to Scale SERP
        axios.get('https://api.scaleserp.com/search', { params })
        .then(response => {
            setLink(response.data.organic_results[0].link)
        }).catch(error => {
            console.log(error);
        })
    })


    return(
        <div className='course'>
            <Link to='/classlist'><p>Return to Class List</p></Link>
            <div className='inline'>
                <h1>{name} ({code})</h1>
                <button onClick={() => {window.open(link)}}>Click here for Syllabus</button>
            </div>
            <h2>{course.pres}</h2>
            <h2>Course ID: {course.id}</h2>
            <h2>Description:</h2>
            <h3>{course.desc}</h3>
        </div>

    )
}

export default ClassView
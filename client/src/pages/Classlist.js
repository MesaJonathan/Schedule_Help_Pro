import React, { useEffect, useState } from 'react'
import Course from '../Course'
import './Classlist.css'

class schoolCourse{
    constructor(name, code, id, desc, pres, key){
        this.name = name
        this.code = code
        this.id = id
        this.desc = desc
		this.key = key
		if(pres === ''){
			this.pres = 'Prereq: none.'
		} else{
			this.pres = pres
		}
    }
}
	
function ClassList(){
	const [courseList, setCourseList] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		var XMLHttpRequest = require('xhr2');
		const request = new XMLHttpRequest()
		request.open("GET", "https://one.ufl.edu/apix/soc/schedule/?category=CWSP&term=2228")
		request.send()
		let courses = []
		request.onload = () => {
			if(request.status === 200){
				let data = JSON.parse(request.response)
				let length = data[0].COURSES.length  //55
				

				for (let i = 0; i < length; i++){
					let parsed = data[0].COURSES[i]
					let name = parsed.name
					let code = parsed.code
					let id = parsed.courseId
					let description = parsed.description
					let prereqs = parsed.prerequisites

					const exCourse = new schoolCourse(name,code,id,description,prereqs, i)                
					
					courses.push(exCourse)
				}

				setCourseList(courses.map(course => <Course key={course.key} course={course}></Course>))
		
			} else {
				console.log('error $')
			}
		}	
	}, [])

	return (
			<div className="Classlist">
				<h1>Class List</h1>
					<div className='input'>
						<input 
							type="search" 
							placeholder="Filter Classes..." 
							onChange={event => {
								setSearchTerm(event.target.value)
								/*
								setCourseList(courseList.filter(course => {
									if(searchTerm === ''){
										return course
									} else if(course.name.includes(searchTerm)){
										return course
									}
									}).map(course => <Course key={course.key} course={course}></Course>))
								*/
							}}
						/>
					</div>
					{courseList}
			</div>
  	);
}

export default ClassList;
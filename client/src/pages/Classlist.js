import React, { useEffect, useState } from 'react'
import Course from '../Course'

class schoolCourse{
    constructor(name, code, id, desc, pres, key){
        this.name = name
        this.code = code
        this.id = id
        this.desc = desc
		this.key = key
		if(pres === ''){
			this.pres = 'none'
		} else{
			this.pres = pres
		}
    }
}

function searchClass(){
	
}
	
function ClassList(){
	const [courseList, setCourseList] = useState('')
	const [searchName, setSearchName] = useState('')

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
			<div className="App">
				<h1>ClassList</h1>
				<form onSubmit={searchClass}>
					<input 
					value={searchName}
					onChange={(e) => setSearchName(e.target.value)}
					type="text" 
					placeholder="Enter course name" 
					/>
					<br />
					<input type="submit" value="search"/>
				</form>
				{courseList}
			</div>
		//<body>this is where we list all of the classes</body>
  	);
}

export default ClassList;
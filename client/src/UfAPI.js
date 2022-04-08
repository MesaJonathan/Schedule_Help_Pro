class Course{
    constructor(name, code, id, desc, pres){
        this.name = name
        this.code = code
        this.id = id
        this.desc = desc
        this.pres = pres
    }
}
 
async function ListClasses(){ 
	var XMLHttpRequest = require('xhr2');
	let request = new XMLHttpRequest()
	request.open("GET", "https://one.ufl.edu/apix/soc/schedule/?category=CWSP&term=2228")
	request.send()

	request.onload = () => {
		if(request.status === 200){
			let data = JSON.parse(request.response)
			let length = data[0].COURSES.length  //55
			var courses = []

			for (let i = 0; i < length; i++){
				let parsed = data[0].COURSES[0]
				let name = parsed.name
				let code = parsed.code
				let id = parsed.courseId
				let description = parsed.description
				let prereqs = parsed.prerequisites

				const exCourse = new Course(name,code,id,description,prereqs)                
				
				courses.push(exCourse)
			}
			
			return courses
		} else {
			console.log('error $')
		}
	}
}

export default ListClasses()
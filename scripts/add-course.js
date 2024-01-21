const addCoursebtn = document.querySelector("#addUser")

async function initApp () {

}

async function addNewCourseHandler (e) {
    e.preventDefault();
    const course = {
        CourseTitle: "Javascript - Advanced",
        CourseNunber: "2410",
        CourseDuration: "8 Weeks",
        CourseCost: "120 USD"
    };

   const addedCourse = await addNewCourse(course);
   console.log(addedCourse);


}

async function addNewCourse (course) {
    const url = 'http://localhost:3000/courses';7

    try {

   const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(course),
   });

   if (response.ok) {
     const newCourse = await response.json();
     return newCourse;
   } else {
    throw new Error (response.status, response.statusText);
   }

    } catch (error) {
        console.log("Det gick inte bra!", error);
    }

 
}

document.addEventListener("DOMContentLoaded", initApp);
addCoursebtn.addEventListener('click', addNewCourseHandler);
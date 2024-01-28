 import { studentEnrollmentDOM } from './dom.js';

async function fetchCourseEnrollment () {
    
    const url = 'http://localhost:3000/courseStudents';

    try {
        const response = await fetch (url);
        
        
        if(response.ok) {

            const courseStudents = await response.json();
            displayCourseEnrollment(courseStudents);

            
        } else {
           throw new Error(`${response.status}${response.statusText}`);
        }
        
    } catch (error) {
        console.log("Could not fetch course students!", error);
    }
}


function displayCourseEnrollment(courseStudents) {
  
  let uniqueCourses = getUniqueCourses(courseStudents);

  uniqueCourses.forEach((course) => {
    let studentsInCourse = courseStudents.filter(
      (student) => student.courseTitle === course
    );
    studentEnrollmentDOM(
      course,
      studentsInCourse.map((student) => student.studentName)
    );
  });
}

function getUniqueCourses(courseStudents) {
  let courseTitles = courseStudents.map((student) => student.courseTitle);
  return [...new Set(courseTitles)]; 
}

document.addEventListener("DOMContentLoaded", fetchCourseEnrollment)



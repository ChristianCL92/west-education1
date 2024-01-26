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
  const enrollmentDetails = courseStudents.reduce((acc, student) => {
    if (!acc[student.courseTitle]) {
      acc[student.courseTitle] = [];
    }
    acc[student.courseTitle].push(student.studentName);
    return acc;
  }, {});

  for (const [course, students] of Object.entries(enrollmentDetails)) {
    studentEnrollmentDOM(course, students);
  }
}

document.addEventListener("DOMContentLoaded", fetchCourseEnrollment)



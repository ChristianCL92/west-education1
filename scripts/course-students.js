 import { studentEnrollmentDOM } from './dom.js';
 import HttpClient from './http.js';

async function fetchCourseEnrollment () {
    
    const url = 'http://localhost:3000/courseStudents';
    const https = new HttpClient(url);
    try {

        const courseStudents = await https.get();
        displayCourseEnrollment(courseStudents);
        
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



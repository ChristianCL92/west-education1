/* import HttpClient from './http.js';

async function fetchCourseById(id) {
  const url = `http://localhost:3000/courses/${id}`;
  console.log(url);
  const http = new HttpClient(url);
  try {
    const course = await http.get();
    console.log('Response:', course);
    displayCourseDetails(course);
    if(course.ok) {
        const result = await course.json();
        return result;
    } else {
        throw new Error(`${course.status}${course.statusText}`);
    }
  } catch (error) {
    console.error('Error fetching course:', error);
  }
}

function displayCourseDetails(course) {
  const courseTitleElement = document.querySelector("#course-title");
  courseTitleElement.textContent = course.CourseTitle;
 */


  /* document.getElementById("course-duration").textContent =
    course.CourseDuration; */
  
/* }

function getCourseIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const courseId = getCourseIdFromURL();
if (courseId) {
  fetchCourseById(courseId);
}


export { fetchCourseById, displayCourseDetails}; */

import HttpClient from './http.js';
import { singleCourseData } from './dom.js';

async function displaySingleCourse () {
  
  const idCourse = location.search.split("=")[1];
  const url = `http://localhost:3000/courses/${idCourse}`;
  const http = new HttpClient (url);
  
  try {

    const course = await http.get();
     singleCourseData(course);



  } catch (error) {
    console.log("error displaying the course information", error);
  }

};


document.addEventListener("DOMContentLoaded", displaySingleCourse)

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

import HttpClient from './http.js';
import { displayCourses } from './dom.js';

async function getDataAndDisplay() {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  try {
    const courses = await http.get();
    courses.forEach((course)=> {
      const courseElement = displayCourses(course);
      document.getElementById('Our-Courses').appendChild(courseElement);
      
    })
  } catch (error) {
    console.log("Error getting courses:", error);
  }
      
}


document.addEventListener("DOMContentLoaded", getDataAndDisplay)


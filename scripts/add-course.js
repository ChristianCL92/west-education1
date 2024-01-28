
import HttpClient from "./http.js";
const form = document.querySelector("#addCourseForm");

form.addEventListener("submit", async (e) =>{
  e.preventDefault();
  
  const courseData = {
    CourseTitle: document.querySelector('#courseTitle').value,
    CourseNumber: document.querySelector('#courseNumber').value,
    CourseDuration: document.querySelector('#courseDate').value,
    CourseCost: document.querySelector('#courseCost').value,
    TeachingMethod: document.querySelector('#courseMethod').value,
    StartDate: document.querySelector('#courseStart').value
  };

    try {
      const httpClient = new HttpClient('http://localhost:3000/courses');
      const newCourse = await httpClient.add(courseData);
      console.log('Course added:', newCourse);
      
    } catch (error) {
      console.error('Failed to add course:', error);
      
    }

});

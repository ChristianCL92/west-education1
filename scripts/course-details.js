import HttpClient from "./http.js";

 async function accessCourseDetails (courseId) {
    const url = `http://localhost:3000/courses/${courseId}`;

    const response = new HttpClient(url);

    try {
        
    } catch (error) {
        
    }


}

document.addEventListener("DOMContentLoaded", accessCourseDetails);
import HttpClient from './http.js';
import { CourseData } from './interface.js';

const form = document.querySelector('#addCourseForm') as HTMLFormElement;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const courseData: CourseData = {
    CourseTitle: (document.querySelector('#courseTitle') as HTMLInputElement).value,

    CourseNumber: (document.querySelector('#courseNumber') as HTMLInputElement).value,

    CourseDuration: (document.querySelector('#courseDate') as HTMLInputElement).value,

    CourseCost: (document.querySelector('#courseCost') as HTMLInputElement).value,

    TeachingMethod: (document.querySelector('#courseMethod') as HTMLInputElement).value,

    StartDate: (document.querySelector('#courseStart') as HTMLInputElement).value,
  };

  try {
    const httpClient = new HttpClient('http://localhost:3000/courses');

    const newCourse = await httpClient.add(courseData);

    console.log('Course added:', newCourse);
  } catch (error) {
    console.error('Failed to add course:', error);
  }
});

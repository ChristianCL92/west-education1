var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HttpClient from './http.js';
const form = document.querySelector('#addCourseForm');
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const courseData = {
        CourseTitle: document.querySelector('#courseTitle').value,
        CourseNumber: document.querySelector('#courseNumber').value,
        CourseDuration: document.querySelector('#courseDate').value,
        CourseCost: document.querySelector('#courseCost').value,
        TeachingMethod: document.querySelector('#courseMethod').value,
        StartDate: document.querySelector('#courseStart').value,
    };
    try {
        const httpClient = new HttpClient('http://localhost:3000/courses');
        const newCourse = yield httpClient.add(courseData);
        console.log('Course added:', newCourse);
    }
    catch (error) {
        console.error('Failed to add course:', error);
    }
}));

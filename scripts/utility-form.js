import HttpClient from "./http.js";

const form = document.querySelector("#sendForm");
const nameInput = document.querySelector("#student");
const billingInput = document.querySelector("#billing");
const mobileInput = document.querySelector("#mobile");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

function formHandler (e) {
e.preventDefault();

const selectedCourseTitle = localStorage.getItem("selectedCourseTitle");
const formData = {
studentName : nameInput.value,
billAdress: billingInput.value,
mobileNumber: mobileInput.value,
email: emailInput.value,
password: passwordInput.value,
...(selectedCourseTitle && {courseTitle: selectedCourseTitle})

}
 formSubmitData(formData);

}

async function formSubmitData (formData) {
  
  try {
    let result;
    if(formData.courseTitle) {
      result = await enrollStudent(formData);
    } 
    else {
      const url = 'http://localhost:3000/studentRegister';
      const httpClient = new HttpClient(url)
      result = await httpClient.add(formData)
    }
  } catch (error) {
      console.log("Form submission error:", error);
  }
} 

async function enrollStudent(studentData) {
  const url = 'http://localhost:3000/courseStudents';

   const httpClient = new HttpClient(url); 

   try {
    const result = await httpClient.add(studentData);
    localStorage.removeItem("selectedCourseTitle");
    return result
    
  } catch (error) {
    console.log("Error in student enrollment", error);
  } 

}

form.addEventListener("submit", formHandler);
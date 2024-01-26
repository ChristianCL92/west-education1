const form = document.querySelector("#sendForm");
const nameInput = document.querySelector("#student");
const billingInput = document.querySelector("#billing");
const mobileInput = document.querySelector("#mobile");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

function initApp () {

}

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

    let url;
    
    if(formData.courseTitle){
        url = 'http://localhost:3000/courseStudents';
        return await enrollStudent(formData)
    } else {
        url = 'http://localhost:3000/studentRegister';
    }

    try {
     const response = await fetch(url, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
     });

     if(response.ok) {
        const newStudent = await response.json();
        return newStudent;
     } else {
        console.log("Form submission not successfull");
     }
        
    } catch (error) {
        console.log("Form is not implemented correctly", error);
    }

}

async function enrollStudent(studentData) {
  const url = 'http://localhost:3000/courseStudents';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(studentData),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.removeItem('selectedCourseTitle');
      return result;
      
    } else {
      console.log('Error in student enrollment');
    }
  } catch (error) {
    console.log(error);
  }
}


document.addEventListener("DOMContentLoaded", initApp)
form.addEventListener("submit", formHandler);
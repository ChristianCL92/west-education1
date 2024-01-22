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

const formData = {
studentName : nameInput.value,
billAdress: billingInput.value,
mobileNumber: mobileInput.value,
email: emailInput.value,
password: passwordInput.value,

}
 formSubmitData(formData);

}

async function formSubmitData (formData) {
    const url = 'http://localhost:3000/studentRegister';

    try {
     const response = await fetch(url, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
     });

     if(response.ok) {
        const newStudent = await response.JSON();
        return newStudent;
     } else {
        console.log("Form not successfull");
     }
        
    } catch (error) {
        console.log("Form is not implemented correctly", error);
    }

}

document.addEventListener("DOMContentLoaded", initApp)
form.addEventListener("submit", formHandler);
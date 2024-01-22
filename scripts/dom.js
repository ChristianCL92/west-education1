function displayCourses (course) {
    const card = document.createElement("div");
    card.classList.add("course-card");

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = `ID: ${course.id}`;
    
    card.appendChild(paragraphElement);

    const courseTitle = document.createElement("h3");
    courseTitle.textContent = `Course: ${course.CourseTitle}`;
    card.appendChild(courseTitle);

    const courseDuration = document.createElement("h4");
    courseDuration.textContent = `Course Duration:${course.CourseDuration}`;
    card.appendChild(courseDuration);

    const readMoreBtn = openSingleCourseHandler(course.id)
    card.appendChild(readMoreBtn);

    return card;  
}

/* function createImage (imageUrl) {
    const image = document.createElement("img");
    image.setAttribute('src', `/content/images/${imageUrl}`);

    return createImage;
}  */

function openSingleCourseHandler (courseId) {

    const button = document.createElement('button');
    button.classList.add('btn-more');

    if (location.href.includes("course-details.html")) {
        button.textContent = "Enroll Now";
        button.addEventListener("click", () => {
            location.href = "../pages/register.html";
        })
    } else {
        button.textContent = 'Read More';

         button.addEventListener('click', () => {
           location.href = `course-details.html?id=${courseId}`;
         });
        
    }
    
   
    return button;
}

function singleCourseData (course) {
    const courseCard = document.createElement("div");
    
  /*    if(course.imageUrl) {
    const courseImage = createImage(course.imageUrl);
    courseCard.appendChild(courseImage);
    }  */
    const courseTitle = document.createElement("h1");
    const courseNumber = document.createElement("p");
    const courseDuration = document.createElement("p");
    const teachingMethod = document.createElement("p");
    const courseStart = document.createElement("p");
    const enrollCourse = openSingleCourseHandler(course.id)

    courseTitle.textContent = `${course.CourseTitle}`;
    courseNumber.textContent = `Course Number: ${course.CourseNumber}`;
    courseDuration.textContent = `Duration: ${course.CourseDuration}`;
    teachingMethod.textContent = `Teaching Method:${course.TeachingMethod}`;
    courseStart.textContent =`Start:${course.StartDate}`;

    courseCard.appendChild(courseTitle);
    courseCard.appendChild(courseNumber);
    courseCard.appendChild(courseDuration);
    courseCard.appendChild(teachingMethod);
    courseCard.appendChild(courseStart);
    courseCard.appendChild(enrollCourse);
    
    document.querySelector("#single-course").appendChild(courseCard);
}

export { displayCourses, singleCourseData};




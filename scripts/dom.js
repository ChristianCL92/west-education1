function displayCourses (course) {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if(isPopularCourse(course.CourseTitle)) {
        const popularCourses =document.createElement("p");
        popularCourses.classList.add("popular-courses");
        popularCourses.textContent = "Popular";
        card.appendChild(popularCourses);
    }

    const courseTitle = document.createElement("h3");
    courseTitle.textContent = `${course.CourseTitle}`;
    card.appendChild(courseTitle);

    const courseDuration = document.createElement("h4");
    courseDuration.textContent = `Course Duration:${course.CourseDuration}`;
    card.appendChild(courseDuration);

    const readMoreBtn = openSingleCourseHandler(course)
    card.appendChild(readMoreBtn);

    return card;  
}

 function createImage (imageUrl) {
    const image = document.createElement("img");
    image.classList.add("img-container");
    image.setAttribute('src', `../content/images/${imageUrl}`);
    
    return image;
}  

function isPopularCourse (course) {
    const popularCourses = ["JavaScript", "Cybersecurity", "Data Analysis"];
    return popularCourses.includes(course);
}

function openSingleCourseHandler (course) {

    const button = document.createElement('button');
    button.classList.add('btn-more');

    if (location.href.includes("course-details.html")) {
        button.textContent = "Enroll Now";
        button.addEventListener("click", () => {
            localStorage.setItem("selectedCourseTitle", course.CourseTitle)
            location.href = "../pages/register.html";
        })
    } else {
        button.textContent = 'Read More';

         button.addEventListener('click', () => {
           location.href = `course-details.html?id=${course.id}`;
         });
        
    }
    
    return button;
}

function singleCourseData (course) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-data");
    
      if(course.imageUrl) {
    const courseImage = createImage(course.imageUrl);
    courseCard.appendChild(courseImage);
    }  
    const courseTitle = document.createElement("h1");
    const courseNumber = document.createElement("p");
    const courseDuration = document.createElement("p");
    const teachingMethod = document.createElement("p");
    const courseStart = document.createElement("p");
    const enrollCourse = openSingleCourseHandler(course)

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




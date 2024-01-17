function displayCourses (course) {
    const card = document.createElement("div");
    card.classList.add("course-card");

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = `ID: ${course.id}`;
    paragraphElement
    card.appendChild(paragraphElement);

    const courseTitle = document.createElement("h3");
    courseTitle.textContent = `Course: ${course.CourseTitle}`;
    card.appendChild(courseTitle);

    const courseDuration = document.createElement("h4");
    courseDuration.textContent = `Course Duration:${course.CourseDuration}`;
    card.appendChild(courseDuration);

    const readMoreBtn = openSingleCourse(course.id)
    card.appendChild(readMoreBtn);

    return card;  
}


function openSingleCourse (courseId) {

    const button = document.createElement('button');
    button.classList.add('btn-more');
    button.textContent = 'Read More';

    button.addEventListener("click", () => {
        location.href = `course-details.html?id=${courseId}`
    })
    return button;
}


export {displayCourses};




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
    courseDuration.textContent = `${course.CourseDuration}`;
    card.appendChild(courseDuration);

    

    return card;
}

export {displayCourses};




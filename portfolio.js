const course = document.querySelector(".course");
const column = document.querySelector(".col");

course.addEventListener("click", (event) => {
    if (event.target.classList.contains('course-link') &&
        !event.target.classList.contains('active')) {
        const target = event.target.getAttribute('data-target');
        // console.log(target);
        course.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        
        const activeElements = column.querySelectorAll(".tab-content.active");
        activeElements.forEach((element) => {
            element.classList.remove("active");
        });

        const targetElements = column.querySelectorAll(target);
        targetElements.forEach((element) => {
            element.classList.add("active");
        });
        console.log(target);
    }
})


document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");

    form.onsubmit = (event) => {
        event.preventDefault();

        const courses = [];
        ["course1", "course2", "course3"].forEach(courseId => {
            let courseElem = document.getElementById(courseId);
            if (courseElem.checked) {
                courses.push(document.querySelector(`label[for="${courseId}"]`).textContent.trim());
            }
        });

        if (form.elements.name.value && form.elements.email.value) {
            console.group("========== Form Submission ========== ");
            console.log("Name:", form.elements.name.value);
            console.log("Email:", form.elements.email.value);
            console.log("Registration Status:", form.elements.registrationStatus.value);
            console.log("Courses Taken:", courses.join(", "));
            console.log("Anything Else:", form.elements.anythingElse.value);
            console.groupEnd();
        } else {
            console.warn("Please enter name and email to submit the form");
        }
    };
});

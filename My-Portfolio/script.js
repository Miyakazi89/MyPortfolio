document.addEventListener("DOMContentLoaded", function() {
    const heading1 = "HELLO";
    const heading2 = "I'M MIYAKAZI MAFUDUKA";
    const paragraph = "A Web and Software Developer";

    typeWriterEffect(document.getElementById("heading1"), heading1, 0, function() {
        typeWriterEffect(document.getElementById("heading2"), heading2, 0, function() {
            typeWriterEffect(document.getElementById("paragraph"), paragraph, 0, null);
        });
    });
});

function typeWriterEffect(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        element.style.opacity = 1; // Make visible as text is typed
        setTimeout(function() {
            typeWriterEffect(element, text, index + 1, callback);
        }, 100);
    } else if (callback) {
        setTimeout(callback, 500); // Wait before starting the next line
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'skill-level'
    const skillLevels = document.querySelectorAll(".skill-level");

    // Loop through each skill-level element and set the width to match the data-percentage attribute
    skillLevels.forEach(skill => {
        const percentage = skill.dataset.percentage; // Get the percentage value from data attribute
        skill.style.width = percentage; // Set the width of the skill bar
    });
});



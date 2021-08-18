"use strict"
const QUESTIONS = document.querySelectorAll(".faq__question");

QUESTIONS.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.classList.toggle("active");
    });
});

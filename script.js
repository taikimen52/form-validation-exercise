import {validateField, validateForm} from "./rules.js"

// form要素の取得
const form = document.getElementById("form")

function handleInput(eTarget) {
    validateField(eTarget);
}

function handleSubmit(e) {
    e.preventDefault();
    validateForm(e.currentTarget)
}

form.addEventListener("input", (e) => {
    if(!e.target.name) return;
    handleInput(e.target);
})

form.addEventListener("submit", (e) => {
    handleSubmit(e)
});

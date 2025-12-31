import {rules, validateField} from "./rules.js"

// 各input要素・form要素を取得
const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const verifyPass = document.getElementById("verify-pass");

const form = document.getElementById("form")

function handleInput(eTarget) {
    validateField(eTarget);
}

function handleSubmit(e) {
    e.preventDefault();
    validateField(e.target);
}

form.addEventListener("input", (e) => {
    if(!e.target.name) return;
    handleInput(e.target);
})

form.addEventListener("submit", (e) => {
    handleSubmit(e)
});

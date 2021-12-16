document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#signin");
    const joinForm = document.querySelector("#join");

    document.querySelector.("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        joinForm.classList.remove("form__hidden");
    });
    document.querySelector.("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        joinForm.classList.add("form__hidden");
    });
});
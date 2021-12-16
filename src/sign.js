function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form__message--error");
    messageElement.classList.add('.form__message--${type}').textContent = message;
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message");
}

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

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Incorrect Username/Password.Try Again.");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.lenght > 0 && e.target.value.lenght < 10) {
                setInputError(inputElement, "Username Must Be at Least 10 Characters.");
            }
        });
    });
});
function loggingIn(event) {
window.location.reload();
}
let logInButton = document.querySelector("#login-button");
logInButton.addEventListener("click", loggingIn);


function matchPassword(event) {
    let createPassword = document.getElementById("create-password-input");
    let confirmPassword = document.getElementById("confirm-password-input");
    let createPasswordValue = createPassword.value;
    let confirmPasswordValue = confirmPassword.value;

    if (confirmPasswordValue !== createPasswordValue) {
  
    alert("Passwords do not match! Please try again.");
    } else {
        alert("Welcome, you will receive a confirmation email.");
        window.location.reload();
    }

}

let signUpForm = document.querySelector("#sign-up-button");
signUpForm.addEventListener("click", matchPassword);

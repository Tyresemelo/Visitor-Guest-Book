const form = document.getElementById("Form");

function handleSubmit(event) {
event.preventDefault();


const username = event.target.username.value;
const message = event.target.message.value;

console.log({ username: username, message: message})
}

form.addEventListener("submit", handleSubmit)
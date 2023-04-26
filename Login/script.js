const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function swapUp() {
  document.querySelector(".container").style.cssText = "transform: rotateY(180deg)";
}

function swapIn() {
  document.querySelector(".container").style.cssText = "transform: rotateY(0deg)";
}

let inputs = document.querySelectorAll(".input-data");
inputs.forEach(e => {
  e.addEventListener('focusout', () => {
    let input = e.querySelector("input");
    let label = e.querySelector("label");
    if (input.value !== "")
      label.style.cssText = "transform: translate(0, -15px);font-size: 15px; color: #f538eb;";
    else label.style.cssText = "transform: translate(0, 0);";
  }
)});


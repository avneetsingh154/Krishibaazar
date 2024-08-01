const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  const em = document.querySelector(".email").value;
  console.log(em);
  const pw = document.querySelector(".password").value;
  console.log(pw);
  if (em != "asingh49_be23@thapar.edu" || pw != "aviavi123") {
    alert("Wrong Credentials");
  } else window.location.href = "/selling.html";
});
document.querySelector(".btni").addEventListener("click", function (e) {
  e.preventDefault();
  const em = document.querySelector(".email").value;
  console.log(em);
  const pw = document.querySelector(".password").value;
  console.log(pw);
  if (em != "asingh49_be23@thapar.edu" || pw != "aviavi123") {
    alert("Wrong Credentials");
  } else window.location.href = "/market.html";
});

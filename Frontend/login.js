document.querySelector(".button-33").addEventListener("click", function () {
  let element = document.getElementById("mydiv");
  element.classList.remove("hidden");
  let j = document.getElementById("butt");
  j.classList.add("hidden1");
  let k = document.getElementById("log");
  k.classList.remove("hidden1");
  document.querySelector(".login-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const em = document.querySelector(".email").value;
    console.log(em);
    const pw = document.querySelector(".password").value;
    console.log(pw);
    if (em != "asingh49_be23@thapar.edu" || pw != "aviavi123") {
      alert("Wrong Credentials");
    } else window.location.href = "/selling.html";
  });
});

document.querySelector(".button-34").addEventListener("click", function () {
  let element = document.getElementById("mydiv");
  element.classList.add("hidden");
  let j = document.getElementById("butt");
  j.classList.add("hidden1");
  let k = document.getElementById("log");
  k.classList.remove("hidden1");

});

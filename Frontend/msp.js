document.querySelector(".but").addEventListener("click", function (e) {
    e.preventDefault();
    let gg = Number(document.getElementById("g").value);
    let hh = Number(document.getElementById("h").value);
    console.log(gg);
    
    if (gg > 2125 && hh > 0) {
      window.location.href = "inter.html";
    } else {
      
      alert("NOT POSSIBLE UNDER MSP");
    }
  });
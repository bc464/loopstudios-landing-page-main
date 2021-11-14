
    function dropdownMenu() {
      let x = document.getElementById("dropdownClick");
      let y = document.querySelector(".open");
      let z = document.querySelector(".close");
      if (x.className === "topnav") {
        x.className += " responsive";
        z.style.display = "block";
        y.style.display = "none";
        
      } else {
        x.className = "topnav";
        y.style.display = "block";
        z.style.display = "none";
      }
    }
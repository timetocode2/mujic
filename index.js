document.getElementById("log-in").addEventListener("click", () => {
    alert("Function not available;");
  });
  
  const signUp = document.getElementById("sign-up");
  const firstPage = document.getElementById("firstPage");
  const secondPage = document.getElementById("secondPage");
  

  signUp.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.setProperty("display", "flex")
  });
  
  
  function validateForm() {
    let name = document.getElementById("input-name").value;
    let number = document.getElementById("input-number").value;
  
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
  
    if (number.length !== 10 || isNaN(number)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
  
    // Store name in localStorage
    localStorage.setItem("userName", name);
  
    // Redirect to index2.html
    window.location.href = "spotify.html";
  }
  
  
  
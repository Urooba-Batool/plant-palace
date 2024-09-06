const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
sidebarCloser = document.querySelector(".sidebarCloser");

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }   

    // js code for toggle dark and light mode
    modeToggle.addEventListener("click", () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep the selected settings 
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }
        else{
            localStorage.setItem("mode", "dark-mode");
        }
    });

    // js code for toggle search box
    searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");
    });

    // js code for toggle sidebar 
    sidebarOpen.addEventListener("click", () =>{
        nav.classList.add("active");
    });
    body.addEventListener("click", e =>{
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
    });
    
    // js code for slider
    const fadeSlider = document.querySelector('.fade-slider .slides');
    let fadeIndex = 0;

    function showNextFadeImage() {
        const images = fadeSlider.querySelectorAll('img');
        images[fadeIndex].classList.remove('active');
        fadeIndex = (fadeIndex + 1) % images.length;
        images[fadeIndex].classList.add('active');
    }

    setInterval(showNextFadeImage, 3000); 


    // form switching
const loginBtn = document.querySelector("#login-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const user_container = document.querySelector(".user-container");

signUpBtn.addEventListener("click", () => {
    user_container.classList.add("sign-up-mode");
});

loginBtn.addEventListener("click", () => {
    user_container.classList.remove("sign-up-mode");
});

// Form Validation and Local Storage
const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".sign-up-form");

// Sign Up Form Validation and Storage
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = signUpForm.querySelector("input[type='text']").value.trim();
  const email = signUpForm.querySelector("input[type='email']").value.trim();
  const password = signUpForm.querySelector("input[type='password']").value.trim();

  if (username === "" || email === "" || password === "") {
    alert("All fields are required!");
    return;
  }

  // Check if user already exists
  if (localStorage.getItem(email)) {
    alert("User already exists!");
    return;
  }

  // Save user details to local storage
  const user = {
    username,
    email,
    password
  };
  
  localStorage.setItem(email, JSON.stringify(user));
  alert("Sign up successful! You can now log in.");

  signUpForm.reset();
  user_container.classList.remove("sign-up-mode");
});

// Login Form Validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = loginForm.querySelector("input[type='text']").value.trim();
  const password = loginForm.querySelector("input[type='password']").value.trim();

  if (email === "" || password === "") {
    alert("All fields are required!");
    return;
  }

  const user = JSON.parse(localStorage.getItem(email));
  
  if (!user) {
    alert("User not found! Please sign up first.");
    return;
  }
  
  if (user.password !== password) {
    alert("Incorrect password!");
    return;
  }

  alert(`Welcome back, ${user.username}!`);
  loginForm.reset();
});

// js code for about us slider
document.addEventListener('DOMContentLoaded', () => {
  const serviceContents = document.querySelectorAll('.website');
  const checkScroll = () => {
      serviceContents.forEach(content => {
          const rect = content.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const isVisible = rect.top <= viewportHeight && rect.bottom >= 0;

          if (isVisible) {
              content.classList.add('visible');
          } 
      });
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
});

// for active link
const currentUrl = window.location.href;
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});
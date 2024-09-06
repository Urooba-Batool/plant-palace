      //  starter JavaScript for disabling form submissions if there are invalid fields
      (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();


// loader 
document.addEventListener("DOMContentLoaded", function() {
  const pageLoader = document.querySelector(".page-loader");
  const content = document.querySelector(".content");
  setTimeout(function() {
    pageLoader.classList.add("fade-out");
    
    // Hide the page loader and display the content
    pageLoader.style.display = "none";
    content.style.display = "block";
    content.style.visibility = "visible";
  }, 2000); // fade out after 2 seconds
});




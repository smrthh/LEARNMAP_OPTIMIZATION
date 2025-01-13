'use strict'

const addEventOnElem = function (elem , type , callback){
if (elem.length > 1) {
    for(let i = 0 ; i < elem.length ; i++){
        elem[i].addEventListener(type , callback)
    }
} else {
    elem.addEventListener(type , callback)
}
}


const navbar = document.querySelector("[data-navbar]")
const navLinks = document.querySelectorAll("[data-nav-link]")
const navToggler = document.querySelector("[data-nav-toggler]")


const toggleNavbar = function () {
  navbar.classList.toggle("active")
  navToggler.classList.toggle("active")
}

addEventOnElem(navToggler , "click" , toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active")
    navToggler.classList.remove("active")
  }
  
  addEventOnElem(navLinks , "click" , closeNavbar);


/*
* -- HEADER ACTIVE
*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , function(){
    if(window.scrollY > 100){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
})





/*
* ACTIVE LINKS ON SCROLLING DIFFERENT SECTIONS
*/ 
$(document).ready(function () {
    $(window).on("scroll", function () {
      // Get the current scroll position
      var scrollPos = $(document).scrollTop();
  
      // Initialize a variable to track the active section
      var activeSection = "";
  
      // Loop through each section and check if it's in the viewport
      $("section").each(function () {
        var sectionOffset = $(this).offset().top;
        var sectionHeight = $(this).outerHeight();
  
        if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
          // Update the active section
          activeSection = $(this).attr("id");
        }
      });
  
      // Remove active class from all navigation links
      $("nav a").removeClass("active");
  
      // Add active class to the corresponding navigation link for the active section
      if (activeSection !== "") {
        $('nav a[href="#' + activeSection + '"]').addClass("active");
      }
    });
});

/*
* SHOWING TEXT WHEN FORM IS SUBMITTED
*/
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // You can add form validation here if needed
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Assuming the form is valid, hide the form and display the "thank you" message
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    });
});
/* 
* GETTING A MAIL VIA USING A MAIL.JS 
*/
function sendMail(){
    var params = {
      name : document.getElementById('name').value,
      email : document.getElementById('email').value ,
      message : document.getElementById('message').value ,
      fileUpload : document.getElementById('fileUpload').value
    }
  
  const serviceID = "service_xqy2njv" ;
  const templateID = "template_6zb2ozd" ;
  
  emailjs.send(serviceID , templateID , params)
  .then(
    res => { 
    document.getElementById("name").value = "" ,
    document.getElementById('email').value = "" ,
    document.getElementById('message').value = "" ,
    document.getElementById('fileUpload').value = "" ;
    console.log(res);
  })
  .catch( error => {
    console.log(error)
  })}
  

//! MAILIING FOR THE IMAGES

  emailjs.init("9z4uF5cN3vNOB9JDv");  // Initialize EmailJS with your user ID

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileUpload');
    var formData = new FormData();
    formData.append("image", fileInput.files[0]);

    // Upload image to Imgur (or use other services like Cloudinary)
    fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      headers: {
        "Authorization": "template_6zb2ozd"
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Get the image URL from the response
        var imageUrl = data.data.link;

        // Send the email with the image URL
        var templateParams = {
          to_name: "Recipient Name",
          from_name: "Your Name",
          image_url: imageUrl,  // Pass the image URL to EmailJS
          message: "Here is an image you requested!"
        };

        emailjs.send("service_xqy2njv", "template_6zb2ozd", templateParams)
          .then(function(response) {
            console.log("Success:", response);
            alert("Email sent successfully!");
          }, function(error) {
            console.log("Error:", error);
            alert("Failed to send email.");
          });
      }
    })
    .catch(error => {
      console.error('Error uploading image:', error);
      alert("Failed to upload image.");
    });
  });


  
/*
* PRELOADER
*/ 

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load" , () => {
    setTimeout(() => {
        preloader.classList.add("remove")
    }, 1000);
});


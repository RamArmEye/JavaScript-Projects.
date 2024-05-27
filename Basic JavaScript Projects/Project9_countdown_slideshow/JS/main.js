// Project9_Countdown_Slideshow Assignment

// Countdown timer function
function countdown() {

    // gets the input from the user
    var seconds = document.getElementById("seconds").value;

    // function to perform the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
        }
    }

    tick();
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
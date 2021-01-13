var i = 0;
var count = 0;
document.getElementById("slider").addEventListener("click", function () {
  if (count % 2 === 0) {
    document.querySelector("body").classList.remove("light");
    document.querySelector(".header").classList.remove("light");
    document.querySelector(".heading").classList.remove("light");
    document.querySelector(".side-heading").classList.remove("light");
    document.querySelector(".slider").classList.remove("light");
    for (var j = 0; j <= 3; j++) {
      document.querySelectorAll(".big-cards")[j].classList.remove("light");

      document.querySelectorAll(".handle")[j].classList.remove("light");
      document.querySelectorAll(".followers")[j].classList.remove("light");
    }
    for (var j = 0; j <= 7; j++) {
      document.querySelectorAll(".smaller-cards")[j].classList.remove("light");
      document.querySelectorAll(".topic")[j].classList.remove("light");
      document.querySelectorAll(".number")[j].classList.remove("light");
    }
    for (var j = 0; j <= 2; j++) {
      document.querySelectorAll(".increased")[j].classList.remove("light");
      document.querySelectorAll(".decrease")[j].classList.remove("light");
    }

    document.querySelector(".decreased").classList.remove("light");
    for (var j = 0; j <= 4; j++) {
      document.querySelectorAll(".increase")[j].classList.remove("light");
      document.querySelectorAll("h4")[j].classList.remove("light");
    }

    document.querySelector("body").classList.add("dark");
    document.querySelector(".header").classList.add("dark");
    document.querySelector(".heading").classList.add("dark");
    document.querySelector(".slider").classList.add("dark");
    document.querySelector(".side-heading").classList.add("dark");
    for (var j = 0; j <= 3; j++) {
      document.querySelectorAll(".big-cards")[j].classList.add("dark");
      document.querySelectorAll(".handle")[j].classList.add("dark");

      document.querySelectorAll(".followers")[j].classList.add("dark");
    }
    for (var j = 0; j <= 7; j++) {
      document.querySelectorAll(".smaller-cards")[j].classList.add("dark");
      document.querySelectorAll(".topic")[j].classList.add("dark");
      document.querySelectorAll(".number")[j].classList.add("dark");
    }
    for (var j = 0; j <= 2; j++) {
      document.querySelectorAll(".increased")[j].classList.add("dark");
      document.querySelectorAll(".decrease")[j].classList.add("dark");
    }

    document.querySelector(".decreased").classList.add("dark");
    for (var j = 0; j <= 4; j++) {
      document.querySelectorAll(".increase")[j].classList.add("dark");
      document.querySelectorAll("h4")[j].classList.add("dark");
    }

    count++;
  } else {
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".header").classList.remove("dark");
    document.querySelector(".heading").classList.remove("dark");
    document.querySelector(".slider").classList.remove("dark");
    document.querySelector(".side-heading").classList.remove("dark");
    for (var j = 0; j <= 3; j++) {
      document.querySelectorAll(".big-cards")[j].classList.remove("dark");

      document.querySelectorAll(".handle")[j].classList.remove("dark");
      document.querySelectorAll(".followers")[j].classList.remove("dark");
    }
    for (var j = 0; j <= 7; j++) {
      document.querySelectorAll(".smaller-cards")[j].classList.remove("dark");

      document.querySelectorAll(".topic")[j].classList.remove("dark");
      document.querySelectorAll(".number")[j].classList.remove("dark");
    }
    for (var j = 0; j <= 2; j++) {
      document.querySelectorAll(".increased")[j].classList.remove("dark");
      document.querySelectorAll(".decrease")[j].classList.remove("dark");
    }

    document.querySelector(".decreased").classList.remove("dark");
    for (var j = 0; j <= 4; j++) {
      document.querySelectorAll(".increase")[j].classList.remove("dark");
      document.querySelectorAll("h4")[j].classList.remove("dark");
    }

    document.querySelector("body").classList.add("light");
    document.querySelector(".header").classList.add("light");
    document.querySelector(".heading").classList.add("light");
    document.querySelector(".slider").classList.add("light");
    document.querySelector(".side-heading").classList.add("light");
    for (var j = 0; j <= 3; j++) {
      document.querySelectorAll(".big-cards")[j].classList.add("light");

      document.querySelectorAll(".handle")[j].classList.add("light");
      document.querySelectorAll(".followers")[j].classList.add("light");
    }
    for (var j = 0; j <= 7; j++) {
      document.querySelectorAll(".smaller-cards")[j].classList.add("light");

      document.querySelectorAll(".topic")[j].classList.add("light");
      document.querySelectorAll(".number")[j].classList.add("light");
    }

    for (var j = 0; j <= 2; j++) {
      document.querySelectorAll(".increased")[j].classList.add("light");
      document.querySelectorAll(".decrease")[j].classList.add("light");
    }

    document.querySelector(".decreased").classList.add("light");
    for (var j = 0; j <= 4; j++) {
      document.querySelectorAll(".increase")[j].classList.add("light");
      document.querySelectorAll("h4")[j].classList.add("light");
    }

    count++;
  }
});

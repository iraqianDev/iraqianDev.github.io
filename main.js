// Typing animation
typed = new Typed(`.type`, {
  strings: ["Virtual Assistance", "Frontend Developer", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Scroller progress
window.addEventListener(`scroll`, () => {
  let scroller = document.querySelector(".scroller");
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Scroll to top
span = document.querySelector(".scroll");
document.body.onscroll = () => {
  if (scrollY > 100) {
    span.classList.add("active");
  } else {
    span.classList.remove("active");
  }
};
span.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// dark mode switch
let btn = document.querySelector(".darkModeButton");

btn.addEventListener("click", () => {
  if (!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", "true");
    document.documentElement.style.setProperty("--background", "black");
    document.body.classList.add("darkMode");
    btn.src = "/img/moon.svg";
  } else if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");
    document.documentElement.style.setProperty("--background", "white");
    document.body.classList.remove("darkMode");
    btn.src = "/img/sun.svg";
  } else if (localStorage.getItem("darkMode") === "false") {
    localStorage.setItem("darkMode", "true");
    document.documentElement.style.setProperty("--background", "black");
    document.body.classList.add("darkMode");
    btn.src = "/img/moon.svg";
  }
});

if (localStorage.getItem("darkMode") === "false") {
  document.documentElement.style.setProperty("--background", "white");
  document.body.classList.remove("darkMode");
  btn.src = "/img/sun.svg";
} else if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.style.setProperty("--background", "black");
  document.body.classList.add("darkMode");
  btn.src = "/img/moon.svg";
}

// slider

let left = document.getElementById("left-side");

let handleOnMove = (e) => {
  let position = (e.clientX / window.innerWidth) * 100;

  left.style.width = `${position}%`;
};

document.onmousemove = (e) => handleOnMove(e);
document.ontouchmove = (e) => handleOnMove(e.touches[0]);

// show on scroll

let observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

let hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((e) => observer.observe(e));

//Scoial button

let social = document.querySelector(".shape");

social.addEventListener("click", () => {
  social.classList.toggle("active");
});

document.body.onscroll = () => {
  if (scrollY > 50) {
    social.classList.add("active");
  } else {
    social.classList.remove("active");
  }
};

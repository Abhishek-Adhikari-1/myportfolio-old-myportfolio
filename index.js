window.onbeforeunload = setTimeout(() => {
  window.scrollTo(0, 0);
}, 700);
$('a[href^="#"]').on("click", function (e) {
  var target = this.hash,
    $target = $(target);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top - 0,
      },
      750,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});
$(window).on("load", () => {
  setTimeout(() => {
    $("#status").fadeOut();
    $("#preloader").delay(400).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 2000);
});
setTimeout(() => {
  new Typed(".typped", {
    strings: ["Abhishek Adhikari.", "a Front-end Developer."],
    typeSpeed: 90,
    startDelay: 100,
    backSpeed: 40,
    smartBackspace: true,
    backDelay: 1500,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
    contentType: "html",
  });
}, 3500);
var sr = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 2000,
  delay: 500,
});
sr.reveal(".first_scroll_up", { origin: "top" });
sr.reveal(".home_first_scroll", { delay: 2500 });
sr.reveal(".first_scroll_down");
sr.reveal(".first_scroll_left_img", { origin: "left", distance: "60px" });
sr.reveal(".first_scroll_left", { origin: "left" });
sr.reveal(".first_scroll_right", { origin: "right" });
sr.reveal(".first_scroll_html", {
  origin: "left",
  distance: "60px",
  delay: 1800,
});
sr.reveal(".first_scroll_js", {
  origin: "left",
  distance: "60px",
  delay: 2100,
});
sr.reveal(".first_scroll_css", {
  origin: "left",
  distance: "60px",
  delay: 2800,
});
sr.reveal(".first_scroll_react", {
  origin: "left",
  distance: "60px",
  delay: 3400,
});
sr.reveal(".first_scroll_php", {
  origin: "right",
  distance: "60px",
  delay: 4000,
});
sr.reveal(".first_scroll_c", {
  origin: "right",
  distance: "60px",
  delay: 2800,
});
sr.reveal(".first_scroll_py", {
  origin: "right",
  distance: "60px",
  delay: 3800,
});
sr.reveal(".first_scroll_qleft1", {
  origin: "left",
  distance: "60px",
  delay: 1100,
});
sr.reveal(".first_scroll_qright1", {
  origin: "right",
  distance: "60px",
  delay: 1400,
});
sr.reveal(".first_scroll_qleft2", {
  origin: "left",
  distance: "60px",
  delay: 1700,
});
sr.reveal(".first_scroll_qright2", {
  origin: "right",
  distance: "60px",
  delay: 2000,
});
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav_close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav-transition");
    navMenu.classList.add("show-menu");
    const Main2 = document.querySelector(".main");
    Main2.classList.add("main22");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.add("nav-transition");
    navMenu.classList.remove("show-menu");
    const Main2 = document.querySelector(".main");
    Main2.classList.remove("main22");
  });
}
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  const Main2 = document.querySelector(".main");

  navMenu.classList.remove("show-menu");
  Main2.classList.remove("main22");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
const closeOut = document.querySelectorAll(".main");
function linkActionMain() {
  const navMenu = document.getElementById("nav-menu");
  const Main2 = document.querySelector(".main");

  navMenu.classList.remove("show-menu");
  Main2.classList.remove("main22");
}
closeOut.forEach((o) => o.addEventListener("click", linkActionMain));
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}
skillsHeader.forEach((efgh) => {
  efgh.addEventListener("click", toggleSkills);
});

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
const textarea = document.getElementById("textarea");
textarea.addEventListener("keyup", (e) => {
  var scHeight = e.target.scrollHeight;
  textarea.style.height = "auto";
  textarea.style.height = `${scHeight}px`;
});
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var projectError = document.getElementById("project-error");
var messageError = document.getElementById("message-error");
function validateName() {
  var name = document.getElementById("id-name").value;

  if (name.length == null || name.length == 0 || name.length == "") {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full Name";
    return false;
  }
  nameError.innerHTML = '<i><i class="uil uil-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("id-email").value;

  if (email.length == 0 || email.length == null || email.length == "") {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-z\._\-[0-9]*@[a-z]*[\.][a-z]{3}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<i><i class="uil uil-check"></i>';
  return true;
}
function validateProject() {
  var project = document.getElementById("id-project").value;
  var required = 30;
  var ubreko = required - project.length;

  if (project.length == 0 || project.length == null || project.length == "") {
    projectError.innerHTML = "Project is required";
    return false;
  }
  if (ubreko > 0) {
    projectError.innerHTML = ubreko + "more characters required";
    return false;
  }
  projectError.innerHTML = '<i><i class="uil uil-check"></i>';
  return true;
}
function validateForm() {
  var submitError = document.getElementById("submit-error");
  if (!validateName() && !validateEmail() && !validateProject()) {
    submitError.style.display = "block"; //multiple time jastai.
    submitError.innerHTML = "Please fix all error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000); //time 3 second paxi haraunako lagi.
    return false;
  }
  if (!validateName() || !validateEmail() || !validateProject()) {
    submitError.style.display = "block"; //multiple time jastai.
    submitError.innerHTML = "Please fix all error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000); //time 3 second paxi haraunako lagi.
    return false;
  }
}
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      var a = document.querySelector(".nav_menu a[href*=" + sectionId + "]");
      a.classList.add("active-link");
    } else {
      var a = document.querySelector(".nav_menu a[href*=" + sectionId + "]");
      a.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 30) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 540) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

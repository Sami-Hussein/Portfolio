document.addEventListener('DOMContentLoaded', function() {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 85,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 1,
              "color": "#ffffff"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.08796481407437029,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 30,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openPDF(pdfFileName) {
  const pdfPath = `./assets/${pdfFileName}`;

  window.open(pdfPath);
}

// darkmode toggle
const btn = document.getElementById("themeToggle");
const btn2 = document.getElementById("themeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const keyboardImage = document.querySelector(".about-pic");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark"){
  setDarkMode();
}
btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});


function setTheme(){
  let currentTheme = document.body.getAttribute("theme");
  if (currentTheme === "dark"){
    setLightMode();
    pJSDom[0].pJS.particles.color.value = '#000000';
    pJSDom[0].pJS.particles.line_linked.color = '#000000';
    pJSDom[0].pJS.particles.shape.stroke.color= '#000000';

  }
  else{
    setDarkMode();
    pJSDom[0].pJS.particles.color.value = '#ffffff';
    pJSDom[0].pJS.particles.shape.stroke.color = '#ffffff';
    pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
  }
  pJSDom[0].pJS.fn.particlesRefresh();

}
function setDarkMode(){
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) =>{
    icon.src = icon.getAttribute("src-dark");
  })

  keyboardImage.src = "./assets/keyboard_dark.png";
  
// need to change the toggle icon in order to center it
}


function setLightMode(){
  document.body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");
  themeIcons.forEach((icon) =>{
    icon.src = icon.getAttribute("src-light");
  })
  keyboardImage.src = "./assets/keyboard.png";
  
}

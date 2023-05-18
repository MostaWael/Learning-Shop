let root = document.querySelector(':root');
window.onload = function () {
  if (document.querySelector("body .description"))
    document.querySelector(".description").style.cssText = " transition:1s ;transform: translateX(0px);";
  if (document.querySelector("body .descriptioPhoto"))
    document.querySelector(".descriptioPhoto").style.cssText = " transition: 1s;transform: translateX(0px);";
  if (localStorage.Dark) {
    console.log(localStorage.Dark);
    let icon = document.querySelector(".icon-dark");
    let btn = document.querySelector(".icon_container");
    let isDark = localStorage.Dark;
    if (isDark == "moon") {
      btn.classList.add("moon_mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      icon.style.color = "#fff";
      btn.style.backgroundColor = "#000";
      document.querySelector(".lightMode").style.backgroundColor = "#242424";
      root.style.setProperty('--black-color', '#000');
      root.style.setProperty('--white-color', '#fff');
      root.style.setProperty('--black-light-color', '#242424');
      root.style.setProperty('--textWhite50', '#a6a3a3d4');
    } else {
      btn.classList.remove("moon_mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      icon.style.color = "#FFDE59";
      btn.style.backgroundColor = "#fff";
      document.querySelector(".lightMode").style.backgroundColor = "#ebebeb";
      root.style.setProperty('--black-color', '#fff');
      root.style.setProperty('--white-color', '#000');
      root.style.setProperty('--black-light-color', '#ddd');
      root.style.setProperty('--textWhite50', '#2d2d2dd1');
    }
    icon.setAttribute("data-dark", isDark == "true" ? "false" : "true");
  }
}
document.querySelector(".icon_container").onclick = function darkMode() {
  let icon = document.querySelector(".icon-dark");
  let isDark = icon.getAttribute("data-dark");
  localStorage.Dark = (isDark == "false" ? "moon" : "sun");
  icon.classList.add("animated");
  if (isDark == "false") {
    this.classList.add("moon_mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#fff";
    this.style.backgroundColor = "#000";
    document.querySelector(".lightMode").style.backgroundColor = "#242424";
    root.style.setProperty('--black-color', '#000');
    root.style.setProperty('--white-color', '#fff');
    root.style.setProperty('--black-light-color', '#242424');
    root.style.setProperty('--textWhite50', '#a6a3a3d4');
  } else {
    this.classList.remove("moon_mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#FFDE59";
    this.style.backgroundColor = "#fff";
    document.querySelector(".lightMode").style.backgroundColor = "#ebebeb";
    root.style.setProperty('--black-color', '#fff');
    root.style.setProperty('--white-color', '#000');
    root.style.setProperty('--black-light-color', '#ddd');
    root.style.setProperty('--textWhite50', '#2d2d2dd1');
  }
  icon.setAttribute("data-dark", isDark == "true" ? "false" : "true");
  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
}



let nav = document.querySelectorAll(".navbar-nav > li > a");
let landing = document.querySelectorAll(".landing > div");
nav.forEach(ele => {
  ele.addEventListener('click', e => {
    nav.forEach(x => {
      x.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.classList.contains("inpage")) {
      if (e.target.textContent.includes("HTML")) {
        landing[0].style.cssText = "left : 0%;";
        landing[1].style.cssText = "left : -100%;";
        landing[2].style.cssText = "left : -200%;";
      }
      else if (e.target.textContent.includes("Lessons")) {
        landing[0].style.cssText = "left : 100%;";
        landing[1].style.cssText = "left : 0%;";
        landing[2].style.cssText = "left : -100%;";
      }
      else {
        screen.innerHTML = "";
        projectLvl.forEach(ele => {
          if (ele.classList.contains("active")){
            let content = images[ele.classList[0]];
            content.forEach(img => {
              screen.innerHTML += `<div class = "col mt-3" >
              <a href="${img}" data-lightbox="my galary" ><img src = "${img}" class = "img-fluid rounded-3 h-75 w-100"></a>
            </div>`;
            });
          }
        });
        landing[0].style.cssText = "left : 200%;";
        landing[1].style.cssText = "left : 100%;";
        landing[2].style.cssText = "left : 0%;";
      }
    }
  });
});


let span = document.querySelector('.up');
window.onscroll = function (){
  if(this.scrollY >= 500){
    span.style.right = "20px";
  }else{
    span.style.right = "-55px";
  }
  if (this.scrollY >= 800) {
    if (document.querySelectorAll(".category > div")) {
      document.querySelectorAll(".category > div").forEach((ele) => {
        ele.style.cssText = "transform: translateY(0px);";
      });
    }
  }
  if (this.scrollY >= 1000) {
  }
  if (this.scrollY >= 1200) {
    if (document.querySelectorAll(".course")) {
      document.querySelectorAll(".course").forEach((ele) => {
        ele.style.cssText = "transform: translateX(0px);";
      });
    }
    if (document.querySelectorAll(".feat")) {
      document.querySelectorAll(".feat").forEach((ele) => {
        ele.style.cssText = "transform: translateX(0px);";
      });
    }
  }
}
span.onclick = function(){
  window.scrollTo({
    top:0,
    behavior :"smooth",
  });
}

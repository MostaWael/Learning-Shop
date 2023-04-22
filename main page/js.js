var nav= document.querySelector("#nav");
let scrollnav=scrollY;
addEventListener("scroll",function(){
    if(scrollnav<scrollY)
    {
        console.log("dsfdsfdaaaaaa");
        scrollnav=scrollY;
        nav.classList.add("hide");
    }
    else
    {
        console.log("dsfdsfd");
        nav.classList.remove("hide");
        scrollnav=scrollY;
    }
})



document.querySelector(".icon_container").onclick = function darkMode() {
    let icon = document.querySelector(".icon-dark");
    let isDark = icon.getAttribute("data-dark");
    icon.classList.add('animated');
    if (isDark == "false") {
      this.classList.add("moon_mode");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      icon.style.color = "#fff";
      this.style.backgroundColor = "#000";
      document.querySelector(".lightMode").style.backgroundColor = "#242424"
      document.querySelector("body").style.backgroundColor = "var(--black-color)";
    }
    else {
      this.classList.remove("moon_mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      icon.style.color = "#FFDE59";
      this.style.backgroundColor = "#fff";
      document.querySelector(".lightMode").style.backgroundColor = "#ebebeb"
      document.querySelector("body").style.backgroundColor = "var(--white-color)";
    }
    icon.setAttribute("data-dark", (isDark == "true" ? "false" : "true"));
    console.log(isDark);
    setTimeout( () => {
      icon.classList.remove('animated');
    }, 500)
  }
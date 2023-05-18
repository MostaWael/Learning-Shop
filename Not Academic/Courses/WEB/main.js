let lessons = document.querySelectorAll(".len > h6");
lessons.forEach(ele => {
  ele.addEventListener('click', e => {
    let a = (e.target.textContent.includes("Practice") ? ".Practice" : ".len" );
    a += (e.target.textContent.slice(-1));
    let list = document.querySelector(`${a}`);
    if (list.classList.contains("show")) {
      list.classList.remove("show");
    }
    else list.classList.add("show");
    console.log(list);
  });
});
let images = {
  "easy": ["../../image/ez1.jpeg",
    "../../image/ez2.png", "../../image/ez2.webp", "../../image/ez3.png", "../../image/ez4.jpg"]
  ,
  "medium": ["../../image/med.webp", "../../image/med1.jpg", "../../image/med2.png", "../../image/med3.jpeg"]
  ,
  "hard": ["../../image/hard1.jpg", "../../image/hard2.jpeg", "../../image/hard3.png"],
  "all" : ["../../image/ez1.jpeg","../../image/hard1.jpg", "../../image/hard2.jpeg", "../../image/hard3.png",
    "../../image/ez2.png", "../../image/ez2.webp", "../../image/ez3.png", "../../image/ez4.jpg", "../../image/med.webp",
    "../../image/med1.jpg", "../../image/med2.png", "../../image/med3.jpeg"]
};
let screen = document.querySelector(".projs");
let projectLvl = document.querySelectorAll(".projects > .content > ul > li");
projectLvl.forEach(ele => {
  ele.addEventListener('click', e => {
    projectLvl.forEach(x => {
      x.classList.remove("active");
    });
    screen.innerHTML = "";
    e.target.classList.add("active");
    let content = images[e.target.classList[0]];
    content.forEach(img => {
      screen.innerHTML += `<div class = "col mt-3" >
      <a href="${img}" data-lightbox="my galary" ><img src = "${img}" class = "img-fluid rounded-3 h-75 w-100"></a>
    </div>`;
    });
  });
});

window.onload = function() {
  
};

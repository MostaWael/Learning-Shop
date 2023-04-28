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

// let nav = document.querySelectorAll(".navbar-nav > li > a");
// let landing = document.querySelectorAll(".landing > div");
// nav.forEach(ele => {
//   ele.addEventListener('click', e => {
//     nav.forEach(x => {
//       x.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     if (e.target.classList.contains("inpage")) {
//       if (e.target.textContent.includes("HTML")) {
//         landing[0].style.cssText = "left : 0%;";
//         landing[1].style.cssText = "left : -100%;";
//         landing[2].style.cssText = "left : -200%;";
//       }
//       else if (e.target.textContent.includes("Lessons")) {
//         landing[0].style.cssText = "left : 100%;";
//         landing[1].style.cssText = "left : 0%;";
//         landing[2].style.cssText = "left : -100%;";
//       }
//       else {
//         landing[0].style.cssText = "left : 200%;";
//         landing[1].style.cssText = "left : 100%;";
//         landing[2].style.cssText = "left : 0%;";
//       }
//     }
//   });
// });



let projectLvl = document.querySelectorAll(".projects > .content > ul > li");
projectLvl.forEach(ele => {
  ele.addEventListener('click', e => {
    projectLvl.forEach(x => {
      x.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

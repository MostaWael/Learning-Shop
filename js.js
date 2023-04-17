var nav= document.querySelector(".nav");
let scrollnav=scrollY;
addEventListener("scroll",function(){
    if(scrollnav<scrollY)
    {
        scrollnav=scrollY;
        nav.classList.add("hide");
    }
    
    else
    {
        nav.classList.remove("hide");
        scrollnav=scrollY;
    }
})
var info=document.getElementById("accountInfo");
var check=1;
function showInfo(){
    if(check==1)
    {
        info.style.display="block";
        check=0;
    }
    else{
        info.style.display="none";
        check=1;
    }
}
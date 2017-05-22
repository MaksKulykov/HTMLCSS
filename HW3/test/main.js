/**
 * Created by МАКС on 13.01.2017.
 */
var btn = document.getElementById("btn");
var img = document.getElementById("qwer");
img.style.display = "none";
btn.addEventListener("click", showImg);
function showImg(){
    if(img.style.display == "none") {
        img.style.display = "block";
    } else {img.style.display = "none";}
}
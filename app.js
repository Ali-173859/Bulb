var on = document.getElementById("on")
var off = document.getElementById("off")

on.addEventListener("click", function () {
    console.log(div_container.src);
div_container.src = "bulb_on.jpg"


});

off.addEventListener("click", function () {
    div_container.src = "bulb_off.jpg"
    
    
    })
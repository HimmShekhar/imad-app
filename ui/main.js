console.log('Loaded!');
var element = document.getElementById("main text");
element.innerHTML="Real Madrid halamadrid";

//Move the image
var img=document.getElementById("madi");
marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick= function(){
    var interval= setInterval(moveRight,125);
    img.style.marginLeft="125px";
}; 



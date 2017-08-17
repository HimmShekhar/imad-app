console.log('Loaded!');
var element = document.getElementById("main text");
element.innerHTML="Real Madrid halamadrid";

//Move the image
var img=document.getElementById("madi");
marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 2;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick= function(){
    var interval= setInterval(moveRight,50);
    img.style.marginLeft="125px";
}; 



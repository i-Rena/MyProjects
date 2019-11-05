var img = document.getElementById('image-holder');

img.addEventListener('mouseover' , function(){
   showUp();
});

img.addEventListener('mouseleave' , function(){
    dissapear();
})

function showUp(){
    img.style.width = "500px";
    img.style.height = "500px";
    img.style.border = "2px solid aqua"
    img.style.borderRadius = "20px";
    
}

function dissapear(){
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.border = "none";
    img.style.borderRadius = "none";
}

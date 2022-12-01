var logoButton=document.getElementById("logoButton");
logoButton.onclick=function (){
    console.log("here");
    location.href="index.html";
    
}
var menuButton=document.getElementById("menuButton");
menuButton.onclick=function(){
    let nav_menu=document.getElementById("nav_menu");
    
    if(nav_menu.classList[0]=="classOpenMenu"){
        nav_menu.classList.remove(nav_menu.classList.item(0));
        nav_menu.classList.add("classCloseMenu");
    
        
    }else{
            nav_menu.classList.remove(nav_menu.classList.item(0));
            nav_menu.classList.add("classOpenMenu");

        
    }
    
   
  
}
window.addEventListener('resize', function(event) {
    
    if(window.innerWidth>1000){
        let nav_menu=document.getElementById("nav_menu");
        nav_menu.classList.remove(nav_menu.classList.item(0));
        nav_menu.classList.add("nav_menu");
    }
}, true);
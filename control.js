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
        nav_menu.style.display="none";
        console.log("tamanio: "+nav_menu.classList.length);
        console.log("1");
        
    }else{
            nav_menu.classList.remove(nav_menu.classList.item(0));
            nav_menu.classList.add("classOpenMenu");
            console.log("tamanio: "+nav_menu.classList.length);
            console.log("2");
        
    }
    
   
  
}
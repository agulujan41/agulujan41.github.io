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

var ul_menu=document.getElementsByClassName("ul_menu")[0];
for(let i=0;i<ul_menu.children.length;i++){
    var li=ul_menu.children[i];
    li.addEventListener("mouseover",function(event){
        if(window.innerWidth<=1000){
            
            while(this.classList.length!=0){
                this.classList.remove(this.classList.item(this.classList.length-1));
            }
            this.classList.add("ul_custom_style");
           
            var a=this.children[0];
            while(a.classList.length!=0){
                a.classList.remove(a.classList.item(a.classList.length-1));
            }
            a.classList.add("a_custom_style");

        }
    });
    li.addEventListener("mouseout",function(event){
        if(window.innerWidth<=1000){
            while(this.classList.length!=0){
                this.classList.remove(this.classList.item(this.classList.length-1));
            }
            this.classList.add("ul_custom_style_out");
    
            var a=this.children[0];
            while(a.classList.length!=0){
                a.classList.remove(a.classList.item(a.classList.length-1));
            }
            a.classList.add("a_custom_style_out");
        
        }
       
    });
    li.onclick=function(){
        if(window.innerWidth<=1000){
            this.children[0].click();
        }
        
    }
}
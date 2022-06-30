function press(val){
    var navItems=document.querySelectorAll('.some')
    // console.log(ab)
    
    if(val==2){
        for(var i=0;i<=6;i++){
            navItems[i].style.color="black"  
        }

    }
    else{
        for(var i=0;i<=6;i++){
            navItems[i].style.color="white"  
        }
       
    }

    
}
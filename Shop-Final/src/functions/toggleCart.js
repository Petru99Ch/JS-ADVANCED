let nr = 2
function toggleCart(){
    
    if(nr % 2 == 0){
        document.querySelector("body > div > nav > div").style = "display:block"
    } else {
        document.querySelector("body > div > nav > div").style = "display:none"
    
    }
     nr++
}
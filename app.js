//password show or hide code//////
var password= document.getElementById("password");
var body = document.getElementById("body")


function showPass(e){
    
    console.log(e.className)
    if(e.className === "fas fa-eye-slash"){
        e.className = "far fa-eye" 
        password.type = "text" 
    }else{
        e.className = "fas fa-eye-slash"
        password.type = "password" 

    }
}

function darkMode(e){
    
   
        body.style.backgroundColor = "#040D21"
    
        if(e.className === "fas fa-toggle-on"){
            e.className = "fas fa-toggle-off"
            body.style.backgroundColor = "#1a1110"
            body.style.color = ""
            
        }
        else{
            e.className = "fas fa-toggle-on"
            body.style.backgroundColor = "white"
            
        }
    }
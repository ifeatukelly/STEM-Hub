function myFunction(){
    var x = document.getElementById("myNavbar");
    if (x.className === "topnav"){
        x.className += "responsive";
    } else{
        x.className = "navbar";
    }
    }


var modal = document.getElementById("myModal");
var btn = document.getElementById("profile-button");
var span = document.getElementsByClassName("close"[0]);

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const pass = document.getElementById("pass");
const check = document.getElementById("check");
check.onchange = function(e){
    pass.type = check.checked ? "text" : "password";
};

var cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped');
    });
});


function showAnswer() {
    var x = document.getElementById("answer");
    if(x.style.display=="none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
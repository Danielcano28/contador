const value=document.querySelector("#value");
const incre =document.querySelector("#incre");
const decre =document.querySelector("#decre");
const reset =document.querySelector("#reset");


let suma =0;

value.textContent= suma;

incre.addEventListener("click" , function(){
suma++;
value.textContent= suma;
cambioColor()
})

decre.addEventListener("click", function(){
    if(suma === 0) return;
    
    suma--;
    value.textContent= suma;
    cambioColor()
    
})
reset.addEventListener("click",function(){
    suma = 0;
    value.textContent= suma;
})


function cambioColor() {
    if(suma >= 5 && suma < 10){
        value.style = "color:red"
    }else{
        value.style = "color:blue"

    }
    if(suma < 5){
        value.style ="color:alceblue"
    }
    
    
}


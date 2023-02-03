document.addEventListener("click", habla)

function habla(e){
    //alert("asd")
}

window.onload = function(){
    //alert("Carga completada")

}

window.addEventListener("load", function(e){
    console.log("carga")
})

let stateCheck = setInterval( ()=>{

    let nm = 0;
    let canvas = document.getElementById('canvas3d')
    if (nm) {
        nm++
    }
    else{
        console.log("no working")
    }
    console.log(canvas)
}, 100);
 

function dd(){
    
}
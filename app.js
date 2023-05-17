document.addEventListener("click", habla)
document.body.addEventListener("click", dd)

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
    /* else{
        console.log("no working")
    } */
    //console.log(canvas)
}, 100);
 

function dd(){
    document.body.style.overflow = "hidde";
    console.log(screen)

    console.log(screen.width)
}
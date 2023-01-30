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

    let canvas = document.getElementById('canvas3d')
    if (window.onload) {
        console.log(canvas)
    }
    else{
        console.log("no working")
    }
    console.log(canvas)
}, 100);
 
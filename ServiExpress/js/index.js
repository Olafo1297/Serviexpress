function MostrarInicio(){
    document.getElementById("servicios").style.visibility = "hidden";
    document.getElementById("inicio").style.visibility = "visible";
    document.getElementById("quienessomos").style.visibility = "hidden";
    document.getElementById("contactenos").style.visibility = "hidden";
    
}

function MostrarServicios(){
 document.getElementById("servicios").style.visibility = "visible";
 document.getElementById("inicio").style.visibility = "hidden";
 document.getElementById("quienessomos").style.visibility = "hidden";
 document.getElementById("contactenos").style.visibility = "hidden";
 document.getElementById("inicio").style.height = "0px";
}

function MostrarQuienesSomos(){
    document.getElementById("servicios").style.visibility = "hidden";
    document.getElementById("inicio").style.visibility = "hidden";
    document.getElementById("quienessomos").style.visibility = "visible";
    document.getElementById("contactenos").style.visibility = "hidden";
    document.getElementById("inicio").style.height = "0px";
    document.getElementById("servicios").style.height = "0px";
}

function MostrarContactenos(){
    document.getElementById("servicios").style.visibility = "hidden";
    document.getElementById("inicio").style.visibility = "hidden";
    document.getElementById("quienessomos").style.visibility = "hidden";
    document.getElementById("contactenos").style.visibility = "visible";
    document.getElementById("inicio").style.height = "0px";
    document.getElementById("servicios").style.height = "0px";
    document.getElementById("quienessomos").style.height = "0px";
}
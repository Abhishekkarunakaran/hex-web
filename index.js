function changeColor(){
    let red = document.getElementById("text-red").value;
    let green = document.getElementById("text-green").value;
    let blue = document.getElementById("text-blue").value;

    if (checkPattern(red,green,blue)) {
        let color = red+green+blue;
        document.body.style.background = "#"+color;
        document.getElementById("code").innerHTML = "#"+color.toUpperCase();
        document.getElementById("code").style.fontWeight = bold;
    } else {
        document.body.style.background = "black";
        document.getElementById("code").innerHTML = "Input valid hexcode";
    }
    
    // document.getElementById("code").innerHTML = "#"+red+green+blue; 
    // console.log(red)
    // console.log("submit clicked")
}

function checkPattern(red,green,blue) {
    let re = /^[0-9a-fA-F]+$/;

    if (!(re.test(red))) {
        return false;
    }
    if (!(re.test(green))) {
        return false;
    }
    if (!(re.test(blue))) {
        return false;
    }

    return true;
}
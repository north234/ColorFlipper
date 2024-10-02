const body = document.getElementsByTagName("body")[0];
//body.style.backgroundColor = "red";

function changeColor(color){
    body.style.backgroundColor = color;
};

function randomColor(Random){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
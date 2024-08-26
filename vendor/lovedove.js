function menubar(){
    console.log(3)
    let m=document.getElementById('mc')
     m.style.display='flex'
}
function closebar(){
    document.getElementById('mc').style.display='none'
}
function cart(){
    var numberDiv = document.getElementById("num");
    var currentNumber = parseInt(numberDiv.textContent);
    numberDiv.textContent = currentNumber + 1;
}
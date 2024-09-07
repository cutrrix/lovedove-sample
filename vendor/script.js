function menubar(){
    document.getElementById('mc').style.display='flex';
    console.log('5000')
}
function closebar(){
    document.getElementById('mc').style.display='none'
}

window.addEventListener('scroll',function(){
    document.getElementById('mc').style.display='none'
})
setTimeout(function () {
    waitWrapper.classList.remove('active');
}, 1000);
window.onscroll=function(){
    if(window.scrollY>0){
        document.getElementById('topBar').classList.add('bg');
    }else{
        document.getElementById('topBar').classList.remove('bg');
    }
}

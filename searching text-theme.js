// themes change
document.getElementById("toggle").addEventListener("click", function(){
   
    if( document.getElementsByTagName('body')[0].classList.toggle("dark-theme")){
        document.querySelector('.Day-mode').textContent="Night Mode";
    }
    else{
        document.querySelector('.Day-mode').textContent="Day Mode";
    }
    
});
   
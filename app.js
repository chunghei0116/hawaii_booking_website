let header = document.querySelector('header');
let headerAchor = document.querySelectorAll('header nav ul li a')

window.addEventListener("scroll",()=>{
if(window.pageYOffset!=0){
    header.style.backgroundColor='rgba(0,0,0,0.3)';
    header.style.color="white";
    headerAchor.forEach(element => {
     element.style.color="white";   
    });
} 
else{
    header.style="";
    headerAchor.forEach(element => {
        element.style.color="";   
       });
}
})
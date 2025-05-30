window.addEventListener('load',()=>{

    setTimeout(()=>{
        let loader = document.querySelector('.loader');
        loader.style.display="none";
        let container = document.querySelector('.para');
        container.style.display="block";

        setTimeout(()=>{
            let popup = document.querySelector('.popup-box');
            popup.style.display="flex";
            let container=document.querySelector('.para');
            container.classList.add('blur');
        },5000);
    },5000);
});

let closebtn = document.getElementById('close-btn');
 closebtn.addEventListener('click',()=>{
    let popup = document.querySelector('.popup-box');
    popup.style.display='none';
    let container=document.querySelector('.para');
            container.classList.remove("blur");




































 }) 
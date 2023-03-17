burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navside=document.querySelector('.navside')
navlist=document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('hnav-resp');
    navside.classList.toggle('vclass-resp');
    navlist.classList.toggle('vclass-resp');
})
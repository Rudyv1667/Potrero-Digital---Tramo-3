let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const button = document.querySelector('.inline-option-btn');
   button.addEventListener('click', (event) => {
       event.preventDefault(); // Prevent the default button action

       // Show a loading message or do something else if needed
       Swal.fire({
           title: "Procesando...",
           text: "Por favor, espera.",
           icon: "info",
           showConfirmButton: false,
           allowOutsideClick: false,
           timer: 2000 // Optional: Automatically close after 2 seconds
       });

       // Delay the execution of the next function
       setTimeout(() => {
           Swal.fire({
               title: "¡Listo!",
               text: "Compraste el curso",
               icon: "success"
           });
       }, 3000); // Delay for 3 seconds (3000 milliseconds)
   });
});


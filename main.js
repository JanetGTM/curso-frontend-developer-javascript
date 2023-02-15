const btnMenuEmailDesktop = document.querySelector('.navbar-email');
const menuEmailDesktop = document.querySelector('.desktop-menu');

btnMenuEmailDesktop.addEventListener('click', toggleMenuEmailDesktop);

function toggleMenuEmailDesktop(){
menuEmailDesktop.classList.toggle('inactive');
}


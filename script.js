// Cria as var para receber as classes do css

const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const CadastroLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const IconClose = document.querySelector('.icon-close');

// neste trecho ele pega as classes e add dentro
// do wrapper a classe active, com isso fazendo com 
// que ele seja usado junto.
// ou seja "wrapper.active" mostrando dessa forma
// e com o remove para tirar ".active" do wrapper

CadastroLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})
LoginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})
IconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
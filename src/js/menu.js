const boton = document.getElementById('btnMenu');
const menu = document.getElementById('navigationMenu');

boton.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log("¡Click detectado!");
});
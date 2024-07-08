let show = true;
const menuConstent = document.querySelector('.content');
const menuToggle =  menuConstent.querySelector('.menu-toggle');



menuToggle.addEventListener('click', () => {

menuConstent.classList.toggle('on', show);
show = !show;

});

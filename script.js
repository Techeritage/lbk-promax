let btn = document.getElementById("btn");

btn.addEventListener('click', ()=> {
  contact.scrollIntoView ({behavior: 'auto'});
});

const image = document.querySelector('.viewimg');

setTimeout(() => {
  image.classList.add('active')
}, 1500);

//copyright date function
const yearDisplay = document.getElementId("year");
const date = new Date();
const year = date.getFullYear():

yearDisplay.innerHTML = year;

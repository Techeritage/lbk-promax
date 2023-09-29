let btn = document.getElementById("btn");

btn.addEventListener('click', ()=> {
  contact.scrollIntoView ({behavior: 'auto'});
});

const image = document.querySelector('.viewimg');

setTimeout(() => {
  image.classList.add('active')
}, 2000);
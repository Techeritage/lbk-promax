//sections display animation
const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {threshold: 0.5 });

sections.forEach((section) => {
    observer.observe(section);
});

//scroll to view
let btn = document.getElementById("btn");

btn.addEventListener('click', ()=> {
  contact.scrollIntoView ({behavior: 'auto'});
});

const image = document.querySelector('.viewimg');

setTimeout(() => {
  image.classList.add('active')
}, 1500);

//copyright date function
const date = new Date();
const year = date.getFullYear();

document.getElementById("year").textContent = year;

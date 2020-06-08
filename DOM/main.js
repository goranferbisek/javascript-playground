// document = document Object - contains the DOM
const firstParagraph = document.querySelector('.error'); // use CSS selectors
console.log(firstParagraph.innerHTML);


const paragraps = document.querySelectorAll('p');

paragraps.forEach(p => {
    console.log(p);
});

paragraps[0].innerText += ' And Goran too!';


const content = document.querySelector('.content');
const people = ['Valentino Rossi', 'Marc Marquez', 'Maverick Viñales'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// change a link
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'Link to youtube';

const message = document.querySelector('p.error2');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: green;');
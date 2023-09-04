import aboutPage from './components/about-page/about-page.js';
import menuPage from './components/menu-page/menu-page.js';
import contactPage from './components/contact-page/contact-page.js';
import './normalize.css'
import './style.css'

const aboutButton = document.querySelector('#about');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
const content = document.querySelector('#content');

const restartState = () => {
    content.innerHTML = '';
    content.className = '';
    for (let button of [aboutButton, menuButton, contactButton]) {
        button.classList.remove('selected');
    }
};

const buttonBehaviour = (componentFunction, button) => {
    restartState();
    button.classList.add('selected');
    componentFunction();
}; 

aboutButton.addEventListener('click', () => {
    buttonBehaviour(aboutPage, aboutButton);
});

menuButton.addEventListener('click', () => {
    buttonBehaviour(menuPage, menuButton);
});

contactButton.addEventListener('click', () => {
    buttonBehaviour(contactPage, contactButton);
});

// About page is open by default
buttonBehaviour(aboutPage, aboutButton);

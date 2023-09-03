import aboutPage from './components/about-page/about-page.js';
import menuPage from './components/menu-page/menu-page.js';
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

aboutButton.addEventListener('click', () => {
    restartState();
    aboutButton.classList.add('selected');
    aboutPage();
});

menuButton.addEventListener('click', () => {
    restartState();
    menuButton.classList.add('selected');
    menuPage();
});
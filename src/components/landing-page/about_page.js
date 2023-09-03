import './about-page.css';
import PizzaPicture from './cyber-pizza-example.jpg'

function component() {
    const content = document.querySelector('#content');
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-info')
    
    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add('restaurant-info');
    
    const pizzaHeadline = document.createElement('h2'); 
    pizzaHeadline.innerHTML = `🍕 Cyber Pizzeria: Where Tradition Meets Tomorrow\'s Taste! 🌌`;
    restaurantInfo.appendChild(pizzaHeadline);
    
    aboutDiv.appendChild(restaurantInfo);

    const pizzaDescription = document.createElement('p');
    pizzaDescription.innerText = `
    Experience the future of dining at Cyber Pizzeria, where tradition meets technology to redefine your mealtime adventure.

    🔮 Futuristic Ambiance:
    Step into our avant-garde pizzeria, where cyberpunk style meets 22nd-century charm. Enjoy holographic servers, dynamic 3D menus, and levitating tables for a mesmerizing dining experience.
    
    🌐 Digital Menu Delights:
    Our menu is a digital masterpiece, offering pizzas with ingredients from the future: Nano-Tomato Spheres, Quantum-Cured Space Bacon, Zero-G Mozzarella, and more. Each bite tells a story of innovation.
    
    🛸 AI-Powered Service:
    Experience cutting-edge service with AI servers that anticipate your needs. Order through our neural menu or learn from holographic cyber-chefs. Share your journey on the Interstellar Food Network.
    
    🚀 Galactic Events:
    Don't miss our legendary "Galactic Gastronomy Nights" with holomusic, AR dining, and gravity-defying flavors.
    
    🪐 Private Nebula Nooks:
    For intimate gatherings, our Nebula Nooks offer celestial surroundings to savor artisanal pizzas while stargazing.
    
    🔭 Taste the Future:
    At Cyber Pizzeria, we craft experiences, not just pizza. Whether you're a time-traveling gastronaut or a future-forward foodie, explore tomorrow's gastronomy today. Join us and savor the future, one pixelated pepperoni at a time. 🍕🌟🔮
    `;

    aboutDiv.appendChild(pizzaDescription);

    const pizzaExampleDiv = document.createElement('div');
    pizzaExampleDiv.classList.add('pizza-example');

    const pizzaExample = new Image();
    pizzaExample.src = PizzaPicture;
    pizzaExample.alt = 'Example of our pizza';
    pizzaExampleDiv.appendChild(pizzaExample);
    const pizzaExampleTextNode = document.createTextNode('Here\'s a photo of how our delicious pizza looks like.');
    pizzaExampleDiv.appendChild(pizzaExampleTextNode);

    content.appendChild(aboutDiv);
    content.appendChild(pizzaExampleDiv);
}

export default component;
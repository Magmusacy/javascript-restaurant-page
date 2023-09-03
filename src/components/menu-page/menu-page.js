import './menu-page.css';
import PierogiPizza from './pierogi-pizza.jpg';
import CheesePizza from './cheese-pizza.jpg';
import ArugulaPizza from './arugula-pizza.jpg';
import SalamiPizza from './salami-pizza.jpg';

function createDish(name, priceInt, imageSrc, ingredients) {
    const dishCard = document.createElement('div');
    dishCard.classList.add('dish-card')
    
    const dishName = document.createElement('h2');
    dishName.innerText = name;
    
    const dishPrice = document.createElement('span');
    dishPrice.innerText = `€$${priceInt}`;
    
    const dishCardHeading = document.createElement('div');
    dishCardHeading.classList.add('card-heading');
    dishCardHeading.appendChild(dishName);
    dishCardHeading.appendChild(dishPrice);
    dishCard.appendChild(dishCardHeading);

    const dishPicture = new Image();
    dishPicture.src = imageSrc;
    dishPicture.alt = name;
    dishCard.appendChild(dishPicture);

    const descriptionHeading = document.createElement('h3');
    descriptionHeading.innerText = 'Ingredients:'
    dishCard.appendChild(descriptionHeading);

    const dishDescription = document.createElement('p');
    dishDescription.innerText = ingredients;
    dishCard.appendChild(dishDescription);

    return dishCard;
}

function menuPage() {
    const content = document.querySelector('#content');
    content.classList.add('menu-page');
    const dish1 = createDish('Piergi Pizza', 5, PierogiPizza, 'Pizza dough, mashed potatoes, cheddar cheese, bacon bits, sautéed onions, sour cream, fresh chives, salt, pepper.');
    const dish2 = createDish('Cheese Pizza', 7, CheesePizza, 'Pizza dough, tomato sauce, olive oil, dried oregano, dried basil, salt, pepper, mozzarella cheese, Parmesan cheese, fresh basil leaves.');
    const dish3 = createDish('Arugula Pizza', 4, ArugulaPizza, 'Pizza dough, olive oil, garlic, mozzarella cheese, Parmesan cheese, fresh arugula, balsamic vinegar, salt, and pepper');
    const dish4 = createDish('Salami Pizza', 9, SalamiPizza, 'Pizza dough, pizza sauce, mozzarella cheese, sliced salami, sliced red bell peppers, sliced red onions, olive oil, dried oregano, salt, and pepper');


    content.appendChild(dish1);
    content.appendChild(dish2);
    content.appendChild(dish3);
    content.appendChild(dish4);
};

export default menuPage;
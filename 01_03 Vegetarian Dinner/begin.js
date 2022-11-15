/*
  WRITE YOUR SOLUTION HERE
*/

function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter((option) => option.isVegetarian === true);
  vegetarianOptions.forEach(option => {
    let dish = document.createElement('li');
    dish.textContent = option.name;
    menuNode.appendChild(dish);    
  });
}
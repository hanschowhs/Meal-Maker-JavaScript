// Tasks 1 to 11:

const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizers() {
    return this_courses.appetizers;
  },
  get mains() {
    return this_courses.mains;
  },
  get desserts() {
    return this_courses.desserts;
  },
  set appetizers(a) {
    this_courses.appetizers = a; 
  },
  set mains(m) {
    this_courses.mains = m; 
  },
  set desserts(d) {
    this_courses.desserts = d; 
  },
  get courses() {
    return {
      appetizers : this.appetizers, // We just wrote a getter method above for each of these courses amd getter methods do NOT need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property. If we did not write a getter method, we would type: "appetizers : this_courses.appetizers,"
      mains : this.mains,
      desserts : this.desserts
    }; // The simpler alternative is to just "return _courses;", which will return the entire '_courses' property whose value is an object with the key/value pairs for appetizers, mains, and desserts. Here, we are using the getter methods that we just set up above.
  },
  addDishToCourse(courseName, dishName , dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice
    };
    return this._courses[courseName].push(dish); // We are using the [courseName] bracket notation to access the object's property because the parameter 'courseName' will be entered as a string argument and if the string contains numbers, spaces (such as 'Fried Rice'), or special characters, we MUST use the bracket notation when accessing keys. As suggested in the 'Hint', may want to try using the above setter method: "return this.courseName = dish;"
  }, // This line is creating a regular (as opposed to a getter / setter) method, which is an object's property that has a function called .addDishToCourse() as its value. Recall that before ES6, the syntax is "Method'sName : function () {}". With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length); // A single-line alternative is: "return dishes[Math.floor(Math.random() * dishes.length)];" See test code below for explanations.
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers'); // Notice the difference in the variable and parameter names; singular vs plural. Why the string 'appetizers' and not a single parameter like 'courseName' in the above .getRandomDishFromCourse(courseName) method? Because, there are only 3 possibilities for courses, and for each, we are storing the result in a separate variable. Hence, we will be specific in calling this method with each of the 3 courses as a string argument.
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is ${totalPrice}.`;
    // Why appetizer.price and appetizer.name? Let's start from the top where menu._courses.appetizers begin as an empty array []. As you 'push' a new dish to each course's array via the .addDishToCourse() method, each dish is appended / pushed into the array as an additional object {} of key:value pairs. For example, after calling this method 3 times to add 3 new dishes to the menu._courses.appetizers array, one of its 3 appetizer objects is { name: 'Fries', price: 3.5 } and this could be the one assigned to the const declared 'appetizer' variable since "const appetizer = this.getRandomDishFromCourse('appetizers')", i.e. this method will choose one of the 3 objects in the 'appetizers' array. Hence, you can access the values of each 'appetizers' object's keys with appetizer.key, or specifically appetizer.price and appetizer.name.
  }
};
/*
Test code below to demonstrate the above .getRandomDishFromCourse(courseName) method:
const dishes = ['a','b','c','d']; // 5 elements / dishes.
console.log(Math.floor(Math.random() * dishes.length)); // Math.random() is between 0 and 1. Multiply by the length will give a value between 0 and 4.9999. Math.floor() will round down the range to between 0 and 4; specifically, only the 5 integers - 0,1,2,3,4 - which would represent the index range for this array.
console.log(dishes[Math.floor(Math.random() * dishes.length)]);
*/

// Task 12:

menu.addDishToCourse('appetizers', 'Salad', 1.50);
console.log(menu._courses.appetizers); // To see how each additional dish is being 'pushed' i.e. added to the 'appetizers' array with "this._courses[courseName].push(dish)".
menu.addDishToCourse('appetizers', 'Chips', 2.50);
console.log(menu._courses.appetizers);
menu.addDishToCourse('appetizers', 'Fries', 3.50);
console.log('\n', menu._courses.appetizers);
menu.addDishToCourse('mains', 'Rice', 1.50);
menu.addDishToCourse('mains', 'Pasta', 2.50);
menu.addDishToCourse('mains', 'Steak', 3.50);
console.log('\n', menu._courses.mains);
menu.addDishToCourse('desserts', 'Coffee', 1.50);
menu.addDishToCourse('desserts', 'Jelly', 2.50);
menu.addDishToCourse('desserts', 'Cake', 3.50);
console.log('\n', menu._courses.desserts);

// To see the .getRandomDishFromCourse() method in 'random' action by calling it a few times.
console.log('\n');
console.log(menu.getRandomDishFromCourse('appetizers'))
console.log(menu.getRandomDishFromCourse('appetizers'))
console.log(menu.getRandomDishFromCourse('appetizers'))

// Task 13:

const meal1 = menu.generateRandomMeal();
console.log('\n', meal1); // Repeat several times to see the random selection from each course.
const meal2 = menu.generateRandomMeal();
console.log('\n', meal2);
const meal3 = menu.generateRandomMeal();
console.log('\n', meal3);

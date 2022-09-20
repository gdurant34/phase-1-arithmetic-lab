// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
const num1 = 31;
const num2 = 2;
const multiply = num1*num2;

// Create a variable called random that will generate a random integer greater than 0.
const random = Math.floor(Math.random()*10) +1;

// NOTES - Math.random() returns a number between 0 and 0.999..., which we multiply by 10 to give us a number between 0 and 9.999.... We then pass that number to Math.floor(), which returns an integer between 0 and 9. That's one less than the desired range (1 to 10), so we add one at the end of the equation. Try it out in the JS console!

// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
const num3 = 15;
const num4 = 11;
const mod = num3 % num4;

// Create a variable called max that finds the highest number in a set; the value returned should be 20.
const max = Math.max(10, 5, 20, 18);
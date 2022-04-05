// Functions Exercise
console.log('='.repeat(25));
console.log(' '.repeat(25));


// 1. Create a declaration function called fozzieBear that displays the string "Wocka Wocka!" in the console/terminal when the function is run/executed. Run/execute the function.
function fozziebear() {
console.log('Wocka Flocka!');
}
fozziebear();

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));



// 2. Create another declaration function named beaker that has a parameter named speak. Using multiple console logs in the function, have whatever is passed as an argument display 4 times in the console/terminal. Finally, run/execute the function and pass "Meep" as the argument.
function beaker(speak) {
console.log(speak.repeat(4));
}
beaker('Meep ');

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));



// 3. Create a function called muppetShow that has two parameters named a and b. Inside the function create a conditional statement (A.K.A. If statement) where if the string argument "Muppet" is passed in for "a" AND the string argument "Show" is passed in for "b", then "It's time to play the music. It's time to light the lights." displays in the console/terminal when the function is run/executed. (NOTE: If anything other than "Muppet" and "Show" are passed in as arguments for a and b, then the function should display nothing when run/executed)
function muppetShow(a, b) {
if (a === 'Muppet' && b === 'Show'){
return "It's time to play the music.It's time to light the lights.";
}
return '';
}
console.log(muppetShow('Muppet', 'Show'));
console.log(muppetShow('Statler', 'Waldorf'));

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));



// 4. Create another declaration function called kermit that RETURNS the following string value "Kermit The Frog" when it is run/executed
function kermit() {
console.log('Kermit The Frog');
}
kermit();

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));



// 5. Create another declaration function called muppetShowSeasons that has a parameter named seasons. In the function create a conditional statement where if the number argument passed for seasons is 5 have the function RETURN the boolean value of true. Also, if it is NOT 5 have the function RETURN the boolean value of false.
function muppetShowSeasons(seasons){
if (seasons === 5){
return true;
}
return false;
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(182));

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));


// 6. Create a function expression that is a const variable called manOrMuppet which displays the following string value when the function is run/executed "Am I a man or am I a Muppet?".
const manOrMuppet = function(){
console.log('Am I a man or am I a Muppet?');
}
manOrMuppet();

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));


// 7. Create an Arrow function called rainbowConnection which RETURNS a string value of "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me" (Do this without using brackets "{}" or the return keyword)
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());

console.log(' '.repeat(25));
console.log('='.repeat(25));
console.log(' '.repeat(25));


// 8. QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional? (Just use a comment to answer yes or no)
// No


// 9. QUESTION: If a let or const variable is created outside the scope of a function and the value of the variable is updated inside a function, then assuming the function has been run, could the updated value of the variable be accessed outside of the function (Again, just use a comment to answer yes or no)
// Yes
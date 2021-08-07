console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; //array variable, global

function addItem( item ) { //function called addItems with one parameter called items
  console.log('in addItem function') //shows we are in the addItems function
  basket.push(item); //push argument from later into end of the basket array
      return true; //thumbs up - it's in there
} //end addItems function

// console.log('Added bread to the cart:', addItems( 'bread' )); // add bread
// console.log('Added potatoes to the cart:', addItems( 'potatoes' )); // add potatoes
// console.log('Added bananas to the cart:', addItems( 'bananas' )); // add bananas

function listItems(){ //created function called listItems, no parameters
  console.log('in listItems array'); //shows we are in listItems function
    for(let i=0; i < basket.length; i++){ //for variable basket, start at index 0 and, as long as we don't go past the number of items, incredment one
      console.log(basket[i]); // is there a way to use return and show them all on separate lines???
    } //end for loop
} // end listItems function

listItems(); // run listItems function - no arguments

function empty(){
  basket = [];
  // console.log('Your basket is now empty:', basket);
  return 'your basket is now empty:', basket;
}
empty();
console.log(empty());

// when prompted to test in the file, at this point
// in the ReadMe, I ran a bunch of tests here AND ran
// a bunch IN the console in Chrome - it all checks out!

// tests as suggested from ReadMe:

// console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding juice (expect true)', addItem('juice'));
console.log(`Basket is now ${basket}`);

// extra tests, commented out.Very interested in chasing how 3 could be done right...
// ...I'm going to look into this

// 1. console.log(basket);
// 2. console.log(`${basket}`);
// 3. console.log('lets throw some corn, beef, and corned beef in!', addItem(['corn ', 'beef ', 'corned beef ']));
// 4. console.log(`${basket}`); //so apparently this syntax shows an array in a prettier form!
// 5. console.log(basket); //...while this shows it in proper array form..I WANNA KNOW HOW TO GET THIS PRETTIER :)

//-------------------------------------
//-----------STRETCH GOALS-------------
//-------------------------------------

const maxItems = 5

function isFull(){
  if(basket.length < maxItems){
    return false;
  } //end if not full
  else if(basket.length > maxItems){
    return ('Uh oh - your basket is overflowing!');
  } //end if exactly full
  else{
    return true;
  }
} //end isFull functions

addItem('pears'); //adding pears
addItem('beets'); //adding beets
addItem('cucumber'); //adding cucumber
// addItem('OJ'); //adding OJ
// addItem('milk'); //adding milk
// addItem('tomato'); //adding tomato
// console.log(addItem('batteries')); //adding batteries

console.log(basket); // testing - show me the array

console.log(isFull()); //run function...
// ...less than 5 items = false (not full)
// ...5 items exactly = true (full)
// ...MORE THAN 5 items tells you your basket is overflowing

console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; //array variable, global

function addItems( item ) { //function called addItems with one parameter called items
  console.log('in addItems array') //shows we are in the addItems function
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
  console.log('Your basket is now empty:', basket);
}
empty();

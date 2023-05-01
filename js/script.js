// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html
"use strict";

/**
 * This function calculates the users order and how much the user's order will cost
 */
function calculate () {
  
  // user order input
  let psize = (document.getElementById('size').value);
  let dsize = (document.getElementById('Dsize').value);
  let topping = (document.getElementById('toppings').value);
  let dish = (document.getElementById('dish').value);
  let pizza = ""
  let drink = ""
  let Tnumber= ""
  let Dselect= ""
  // If statments for pizza size
 if ( psize == "small") {
   
   pizza = 10

    }

  else if ( psize =="medium") {

    pizza = 15

    }  

	else if ( psize =="large") {

    pizza = 20

    }
    
   else if ( psize =="dselect") {

   pizza = 0

    }
  
  // If statments for drink size
 if ( dsize =="small1") {
   
   drink = 3

    }

  else if ( dsize =="large2") {

    drink = 5

    }  
    
   else if ( dsize =="dselect") {

   drink = 0

    }
    // If statments for number of toppings
 if ( topping =="1t") {
   
   Tnumber = 1

    }

  else if ( topping =="2t") {

    Tnumber = 1.50

    }  

	else if ( topping =="3t") {

    Tnumber = 2.50

    }
    
  else if ( topping =="4t") {

    Tnumber = 3

    }
    
  else if ( topping =="5t") {

    Tnumber = 3.50

    }
    
  else if ( topping =="6t") {

    Tnumber = 4

    }
   else if ( topping =="dselect") {

   Tnumber = 0

    }
  // If statments for dish
 if ( dish == "caesar") {
   
   Dselect = 7

    }

  else if ( dish =="fries") {

   Dselect = 5

    }  

	else if ( dish =="bread") {

   Dselect = 3

    }
  else if ( dish =="dselect") {

   Dselect = 0

    }
  
  //subtotal tax and total calculation
  let subtotal = drink+pizza+Tnumber+Dselect
  let tax = (drink+pizza+Tnumber) * 0.15
  let total = tax + subtotal
  
  // output subtotal, tax and total
  document.getElementById('sub-display').innerHTML = "Subtotal: $"+subtotal.toFixed(2) 
  document.getElementById('tax-display').innerHTML = "Tax: $"+tax.toFixed(2)
  document.getElementById('total-display').innerHTML = "Total: $"+total.toFixed(2)
  

}
 
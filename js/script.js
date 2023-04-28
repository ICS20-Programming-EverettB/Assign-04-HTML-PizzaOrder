// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

/**
 * This function calculates the users order and how much it will cost
 */
function calculate () {
  
  // user order input
  let psize = (document.getElementById('size').value);
  let dsize = (document.getElementById('Dsize').value);
  let topping = (document.getElementById('toppings').value);
  let pizza = ""
  let drink = ""
  let Tnumber= ""
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
  
  // If statments for drink size
 if ( dsize =="small1") {
   
   drink = 3

    }

  else if ( dsize =="large2") {

    drink = 5

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
  
  //subtotal calculation
  let subtotal = drink+pizza+Tnumber
  let tax = (drink+pizza+Tnumber) * 0.15
  let total = tax + subtotal
  
  // output what movies user can watch
  document.getElementById('sub-display').innerHTML = "Subtotal: $"+subtotal
  document.getElementById('tax-display').innerHTML = "Tax: $"+tax
   document.getElementById('total-display').innerHTML = "Total: $"+total
  

}
 
// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html
"use strict";

/**
 * This function calculates the collects the users order and how much the user's order will cost
 */
function calculate () {
  
  // user order input for drink size, pizza size, toppngs, and side dish
  let psize = (document.getElementById('size').value);
  let dsize = (document.getElementById('Dsize').value);
  let topping = (document.getElementById('toppings').value);
  let dish = (document.getElementById('dish').value);

  //variables used for declairing price and calculating subtotal  
  let pizza = ""
  let drink = ""
  let Tnumber= ""
  let Dselect= ""
  
  // If statments for pizza size and how much each size costs, adding cost to subtotal
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
  
  // If statments for drink size and price per size, adding cost to subtotal
 if ( dsize =="small1") {
   
   drink = 3

    }

  else if ( dsize =="large2") {

    drink = 5

    }  
    
   else if ( dsize =="dselect") {

   drink = 0

    }
  // If statments for number of toppings and price per topping, adding cost to subtotal
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
  // If statments for dish, adding cost to subtotal
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
  
  //subtotal tax and total calculation by adding all the prices to get subtotal, multiplying by .15 to get tax then adding tax and subtotal to get total.
  let subtotal = drink+pizza+Tnumber+Dselect
  let tax = (drink+pizza+Tnumber) * 0.15
  let total = tax + subtotal
  
  // output subtotal, tax and total for user to see with $ symbol and text explaining each 
  document.getElementById('sub-display').innerHTML = "Subtotal: $"+subtotal.toFixed(2) 
  document.getElementById('tax-display').innerHTML = "Tax: $"+tax.toFixed(2)
  document.getElementById('total-display').innerHTML = "Total: $"+total.toFixed(2)
  

}
 
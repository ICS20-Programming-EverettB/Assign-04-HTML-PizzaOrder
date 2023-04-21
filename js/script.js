// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

/**
 * This function calculates what movies the user can watch
 */
function calculate () {
  
  // user age input
  let userage = parseFloat(document.getElementById('Uage').value);
  let agestate = ""
  // If statments for age
 if (userage >=17) {

        agestate = "You can watch any movie."

    }

    else if (userage >= 13) {

        agestate = "You can watch PG-13 movies."

    }  

	else if (userage >=5) {

        agestate = "You can watch PG movies."

    }
    else if (userage >0) {

        agestate = "You can not watch any movies alone."
    }
    else if (userage <0) {

        agestate = "Invalid age."
    }

  else {

        agestate = "Invalid age."

    }

  // output what movies user can watch
  document.getElementById('movie-display').innerHTML = agestate 

}
 
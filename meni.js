'use strict';

function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "navbar-links") 
    {
      x.className += " responsive";
      //  document.getElementById("div122").style.marginTop = "0px"; 
    } 
    else 
    {
      x.className = "navbar-links";
    }
  }
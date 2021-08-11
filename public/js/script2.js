window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
    document.getElementById("fix").className = "headermain fixed";
    document.getElementById("cmain").className = "ajuste";
  } else {
    document.getElementById("fix").className = "headermain";
    document.getElementById("cmain").className = "";
  }
}
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbarc").className = "navbar navbar-expand-lg navbar-light test fixed-top";
  } else {
    document.getElementById("navbarc").className = "navbar navbar-expand-lg navbar-light bg-padrao fixed-top";
  }
}
 
$(function() {
    $("#testado").fadeIn(3000);
});
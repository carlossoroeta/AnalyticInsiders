// Get the popup
var popup = document.getElementById("popup");

// Get the button that opens the popup
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
// Get the <span> element that closes the popup
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
// When the user clicks on the button, open the popup
n1.onclick = function() {
  popup1.style.display = "block";
}
n2.onclick = function() {
    popup2.style.display = "block";
  }
  n3.onclick = function() {
    popup3.style.display = "block";
  }

// When the user clicks on <span> (x), close the popup
span1.onclick = function() {
    popup1.style.display = "none";

}
span2.onclick = function() {
    popup2.style.display = "none";
}
span3.onclick = function() {
    popup3.style.display = "none";
}
// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
  else if (event.target == popup2) {
    popup2.style.display = "none";
  }
  else if (event.target == popup3) {
    popup3.style.display = "none";
  }
}


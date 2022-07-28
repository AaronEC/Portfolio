
/* Header resizing */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("banner").style.fontSize = "10pt";
	document.getElementById("hide").className = 'hidden';
  } else {
    document.getElementById("banner").style.fontSize = "12pt";
	document.getElementById("hide").className = 'toggle-div';
  }
}
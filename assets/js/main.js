
/* Header resizing */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("banner").style.fontSize = "10pt";
	document.getElementById("hide").className = 'hidden';
	// document.getElementById("para").style.display = "none";
	// document.getElementById("about").style.display = "none";
	// document.getElementById("chevron").style.display = "none";
	// document.getElementById("projects-label").style.display = "none";
	showhide();
  } else {
    document.getElementById("banner").style.fontSize = "12pt";
	document.getElementById("hide").className = 'toggle-div';
	// document.getElementById("para").style.display = "block";
	// document.getElementById("about").style.display = "block";
	// document.getElementById("chevron").style.display = "block";
	// document.getElementById("projects-label").style.display = "block";
  }
}


// Toggle show and hide divs

function showhide() {
	var x = document.querySelectorAll(".toggle-div");
	for (var i = 0; i < x.length; i++) {
	  x[i].classList.toggle('hidden');
	}
  }
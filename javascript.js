//navbar bg white when scroll down

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('.navbar').addClass('navbar-scrolled');
		} else{
			$('.navbar').removeClass('navbar-scrolled');
		}
	})
})

//menu bar switch color

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() === 0){
			$('.navbar-toggler img').css('display', 'block');
			$('.navbar-toggler .navbar-toggler-icon').css('display', 'none');
		} else{
			$('.navbar-toggler img').css('display', 'none');
			$('.navbar-toggler .navbar-toggler-icon').css('display', 'block');
		}
	})
});

// top button

let mybutton = document.getElementById('myBtn');
window.onscroll = function(){ scrollFunction()};

function scrollFunction(){
	if (document.documentElement.scrollTop > 20){
		mybutton.style.display = "block";
	} else{
		mybutton.style.display = "none";
	}
	
}

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

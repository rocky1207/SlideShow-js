// JavaScript Document
var nizSlika = ["slika1", "slika2", "slika3", "slika4", "slika5",];
var nizSlikaInfo = ["prva", "druga", "treća", "četvrta", "peta"];
var slideIndex = 0;

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	console.log(slideIndex);
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	
	if(n>slides.length-1) {
		slideIndex = 0;
	}
	if(n<0) {
		slideIndex = nizSlika.length-1;
	}
	for(let i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(let i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	
}


function createImg(id, position) {
	let nosac = document.getElementById(id);
	let nosacSlike = document.createElement('div');
	let number = document.createElement('div');
	let caption = document.createElement('div');
	let slika = document.createElement('img');
	nosacSlike.classList.add('mySlides');
	nosacSlike.classList.add('fade');
	
	number.classList.add('numbertext');
	number.innerHTML = (position+1)+" / "+nizSlika.length;
	
	caption.classList.add('text');
	caption.innerHTML = nizSlikaInfo[position];
	
	slika.src = "img/"+nizSlika[position]+".jpg";
	slika.style.width = "100%";
	
	nosacSlike.appendChild(number);
	nosacSlike.appendChild(slika);
	nosacSlike.appendChild(caption);
	nosac.appendChild(nosacSlike);
};

function createDot(id, position) {
	let nosacDot = document.getElementById(id);
	let dot = document.createElement('span');
	dot.classList.add('dot');
	dot.onclick = function() {
		currentSlide(position);
	}
	nosacDot.appendChild(dot);
}

function createArrows(id){
	let nosac = document.getElementById('slideShow');
	let levo = document.createElement('a');
	let desno = document.createElement('a');
	levo.classList.add('prev');
	desno.classList.add('next');
	levo.onclick = function(){
		plusSlides(-1);
	}
	desno.onclick = function(){
		plusSlides(1);
	}
	levo.innerHTML = "&#10094;";
	desno.innerHTML = "&#10095;";
	nosac.appendChild(levo);
	nosac.appendChild(desno);
}


function create() {
	for(let i=0; i<nizSlika.length; i++) {
		createImg('slideShow', i);
		createDot('dots', i);
	}
	createArrows('slideShow');
	showSlides(slideIndex);
}

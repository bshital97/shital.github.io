/*let newyorkImage = document.querySelector('img');

newyorkImage.addEventListener('click', () => {

	let imgAttr = newyorkImage.getAttribute('src');
	if(imgAttr === "images/NewYork2.png") {
		newyorkImage.setAttribute('src','images/newyork.png');
	} else {
		newyorkImage.setAttribute('src','images/NewYork2.png');
	}
})*/

let buttonVal = document.querySelector('button')
let headingVal = document.querySelector('h1')


function setUserName() {
	let userName = prompt('Please Enter Your Name');
	localStorage.setItem('name',userName);
	headingVal.tetContent = 'Mozilla is Cool,' + userName;
}

if(!localStorage.getItem('name')) {
	
	setUserName();
} else {
//	console.log(headingVal.)
	console.log('Here');
	name = localStorage.getItem('name');
	headingVal.textContent = 'Mozilla is Cool,' + name;
}

buttonVal.onclick = function () {
	setUserName();
};




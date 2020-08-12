const areaCircleBtn = document.getElementById("areaCircleBtn");
const circumferenceBtn = document.getElementById("circumferenceBtn");
const areaSquareBtn = document.getElementById("areaSquareBtn");
const areaTriangleBtn = document.getElementById("areaTriangleBtn");

function getAreaOfCircle(radius) {
    let area = Math.PI * (radius * radius);
    return area.toFixed(2);
};

function getCircumferenceOfCircle(radius) { 
    let circumference = 2 * (Math.PI * radius); 
    return circumference.toFixed(2);
};


function getAreaOfSquare(side) { 
    let area = side * side;
    return area.toFixed(2);
};


function getAreaOfTriangle(base, height) { 
    let area = (base * height) / 2;
    return area.toFixed(2);  
};

areaCircleBtn.onclick = function() {
    areaCircle();
};

function areaCircle() {
	const number = document.getElementById("number").value;
	const resultAreaCircleClick = getAreaOfCircle(number);
	result.innerHTML = "The area of a circle is: " + resultAreaCircleClick;
};

circumferenceBtn.onclick = function() {
    circumferenceCircle()
};

function circumferenceCircle() { 
    number = document.getElementById("number").value;
    const resultCircumferenceClick = getCircumferenceOfCircle(number);
    result.innerHTML = "The circumference of the circle is: " + resultCircumferenceClick;
};

areaSquareBtn.onclick = function() { 
    areaSquare();
};

function areaSquare() {
	number = document.getElementById("number").value;
	const resultSquareCircleClick = getAreaOfSquare(number);
	result.innerHTML = "The area of a square is: " + resultSquareCircleClick;
};

areaTriangleBtn.onclick = function() { 
    areaTriangle();
};

function areaTriangle() {
	number = document.getElementById("number").value;
	const resultTriangleCircleClick = getAreaOfTriangle(number);
	result.innerHTML = "The area of a triangle is: " + resultTriangleCircleClick;
};



console.log(getAreaOfCircle(6));
console.log(getCircumferenceOfCircle(12));
console.log(getAreaOfSquare(4));
console.log(getAreaOfTriangle(3, 15));
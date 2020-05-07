function getAreaOfCircle(radius) {
    let area = Math.PI * (radius * radius);
    return area;
}

console.log(getAreaOfCircle(6));

function getCircumferenceOfCircle(radius) { 
    let circumference = 2 * (Math.PI * radius); 
    return circumference;
}

console.log(getCircumferenceOfCircle(12));

function getAreaOfSquare(side) { 
    let area = side * side;
    return area;
}

console.log(getAreaOfSquare(4));

function getAreaOfTriangle(base, height) { 
    let area = (base * height) / 2;
    return area;  
}

console.log(getAreaOfTriangle(3, 15));
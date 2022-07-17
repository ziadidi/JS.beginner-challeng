//ADDITION
/*
function addition(num1, num2) {
 return num1 + num2;
}

console.log(addition(3, 5));
*/

// HOURS INTO SECONDS
/*
function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));

function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}

console.log(hoursIntoSeconds(10));

function hoursIntoSeconds(hour) {
  return hour * 60 * 60;
}

console.log(hoursIntoSeconds(24));


// CALCULATE THE PERIMETER OF A RECTANGLE

function calcPerimeter(length, width) {
    return 2 * (length + width);
  }
  
  console.log(calcPerimeter(10, 20));


//CALCULATE THE AREA OF A TRIANGLE

function calcTriangleArea(base, height) {
   return 0.5 * base * height;
}

console.log(calcTriangleArea(3, 2));

function calcTriangleArea(base, height) {
   return 0.5 * base * height;
}

console.log(calcTriangleArea(10, 10));

function calcTriangleArea(base, height) {
   return 0.5 * base * height;
}

console.log(calcTriangleArea(20, 20));


// EXTEND A STRING
// (my way)
function appendFrontend(str1, str2) {
    return str1 + str2;
}              

console.log(appendFrontend('Apple', 'Frontend'));

function appendFrontend(str1, str2) {
    return str1 + str2;
}              

console.log(appendFrontend('Banana', 'Frontend'));

function appendFrontend(str1, str2) {
    return str1 + str2;
}              

console.log(appendFrontend('Orange', 'Frontend'));

// (david way)
function appendFrontend(str) {
    return str + 'Frontend';
}              

console.log(appendFrontend('Apple'));

function appendFrontend(str) {
    return str + 'Frontend';
}              

console.log(appendFrontend('Banana'));

function appendFrontend(str) {
    return str + 'Frontend';
}              

console.log(appendFrontend('Orange'));


// GREATER THAN 100?

function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true;
    }
    else {
        return false;
}
}
console.log(sumGreaterThan100(100, -50));
// same as above
// '<, >' return boolean
function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}

  console.log(sumGreaterThan100(50, 52 ));
  

// Less than or Equal to Zero

function lessthanOrEqualToZero(num1) {
    return num1 <= 0
}

  console.log(lessthanOrEqualToZero(-6));


// Opposite boolean
// my way
function oppositeBoolean(bool) {
   if (bool === false) {
    return true
   }
   else {
    return false
   }
}

console.log(oppositeBoolean(false));

// david way
function oppositeBoolean(bool) {
    return !bool;
 }
 
 console.log(oppositeBoolean(true));
 

 // Is not the number 0

 function isNotZero(num) {
    return num !== 0;
 }

 console.log(isNotZero(5));
 */

 // Calculate the remainder

 function calcRemainder(num1, num2) {
    return num1 % num2; 
 }

 console.log(calcRemainder(4, 2));
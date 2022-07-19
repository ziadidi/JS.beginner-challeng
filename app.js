// 1) ADDITION
/*
function addition(num1, num2) {
 return num1 + num2;
}

console.log(addition(3, 5));
*/

// 2) HOURS INTO SECONDS
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

// 3) CALCULATE THE PERIMETER OF A RECTANGLE

function calcPerimeter(length, width) {
    return 2 * (length + width);
  }
  
  console.log(calcPerimeter(10, 20));

// 4) CALCULATE THE AREA OF A TRIANGLE

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

// 5) EXTEND A STRING

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

// 6) GREATER THAN 100?

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
  
// 7) Less than or Equal to Zero

function lessthanOrEqualToZero(num1) {
    return num1 <= 0
}

  console.log(lessthanOrEqualToZero(-6));

// 8) Opposite boolean

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
 
 // 9) Is not the number 0
 
 function isNotZero(num) {
    return num !== 0;
 }

 console.log(isNotZero(5));
 
 // 10) Calculate the remainder
 
 function calcRemainder(num1, num2) {
    return num1 % num2; 
 }

 console.log(calcRemainder(4, 2));
 
 // 11) Is the number odd

  function isOdd(num) {
    return num % 2 !== 0;
  }

  console.log(isOdd(1));
  console.log(isOdd(2));
  console.log(isOdd(3));
  console.log(isOdd(4));

  // 12) If a number is even, return 1 otherwise return -1

  // my way
  function booleanInteger(num) {
    if (num % 2 === 0) {
      return 1;
    }
      return -1;
  }

  console.log(booleanInteger(1));
  console.log(booleanInteger(2));
  console.log(booleanInteger(5));

  // short way
  function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1;
  }

  console.log(booleanInteger(12));
  console.log(booleanInteger(15));
  

  // 13) Check if a user is logged in AND (&&) subscribed
  
  //LONG WAY
  function isloggedInAndSubscribed(loggedin, subscribed) {
    if (loggedin === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') {
      return true;
    }
    return false;
  }

  console.log(isloggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
  
  //short way
  function isloggedInAndSubscribed(loggedin, subscribed) {
    return (loggedin === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED');
  }
  
  console.log(isloggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
  
  // 14) Check if its loggedin OR (||) subscribed
  
  function isloggedInAndSubscribed(loggedin, subscribed) {
    return (loggedin === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED');
  }
  
  console.log(isloggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
  */
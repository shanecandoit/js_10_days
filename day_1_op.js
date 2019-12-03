'use strict';

// https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

/*
Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle 
having sides length and width

getPerimeter(length, width): Calculate and return the perimeter of a rectangle 
having sides length and width
*/

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area = length * width;
    console.log('getArea',length,width,'=',area);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter = 2*length + 2*width;
    console.log('getArea',length,width,'=',area);
    return perimeter;
}


function main() {
    //const length = +(readLine());
    //const width = +(readLine());
    const length = 3;
    const width = 4;
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}
/*Question 1 : Write a program to add, substract, divide, multiply and find remainder*/
{
    // Addition of two number//
    let num_1 = 5;
    let num_2 =10;
    console.log("Addition of two numbers is = ", num_1+num_2);

    // Substraction of two numbers//

    let num_3 = 18;
    let num_4 = 10;
    console.log("Substraction of two numbers = ", num_3 - num_4);

    // Multiplication of two numbers//

    let num_5 = 15;
    let num_6 = 12;
    console.log("Multiplication of two numbers is = ", num_5* num_6);

    // Division of two numbers//

    let num_7 = 20;
    let num_8 = 5;
    console.log("Division of two numbers is = ", num_7/num_8);

    // Remainder of two numbers//

    let num_9 = 200;
    let num_10 = 5;
    console.log("Remainder of two numbers", num_9% num_10);
}

/* Question 2: Write a program to print numbers from 0 to 10*/

{
    for (let num = 0; num <= 10; num++ /* Why "++" why not '+'*/ ) {
       console.log(num);        
    }
}

/* Question 3: Write a program to find a sum of n natural numbers */ 

{
    let n= 15;
    console.log("Sum of n (n=15) Natural number = ", n*(n-1)/2);
}

/* Question 4 : Find the area of circle and rectangle */ 

// Area of Circle = π*r^2
{
    let pi= 3.142;
    let r= 10;
    console.log("Area of Circle = ", pi*(r**2));
}

// Area of Square = side^2
{
    let side= 5;
    console.log("Area of Square =", side**2);
}

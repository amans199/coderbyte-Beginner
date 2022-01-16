/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Additive Persistence                                                                *
*  Using the JavaScript language, have the function AdditivePersistence(num) take the  *
*  num parameter being passed which will always be a positive integer and return its   *
*  additive persistence which is the number of times you must add the digits in num    *
*  until you reach a single digit. For example: if num is 2718 then your program       *
*  should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.         *                                              *
*                                                                                      *
*  SOLUTION                                                                            *
*  The challenge passes a string but it expects us to do Math on it so it needs to     *
*  be converted to numbers. I will use the base 10 parameter of the toString()         *
*  function and the map() function to convert each entry in the array to a Number.     *
*  Then I am going to sum each entry in the array to get a total. I will repeat this   *
*  until my total is a single digit number. The number of times I sum is returned      *
*  as the answer.                                                                      *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize vars sum and loop                                                   *
*    2) Convert str to an array of numbers                                             *
*    3) Loop until the sum of digits in array is a single digit number                 *
*    4) Return number of loops as answer                                               *
*                                                                                      *
***************************************************************************************/

const numToArr = (num) => num.toString().split("")

const AdditivePersistence = (num, iterator = 1) => {
    let sum = 0

    numToArr(num).forEach(element => {
        sum = sum + Number(element)
    });

    (numToArr(sum) && numToArr(sum).length > 1) && AdditivePersistence(sum, iterator++)

    return iterator
}

console.log(AdditivePersistence(99999999999));
console.log(AdditivePersistence(123));
console.log(AdditivePersistence(1));
console.log(AdditivePersistence(65));

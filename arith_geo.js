/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Arith Geo                                                                            *
*  Using the JavaScript language, have the function ArithGeo(arr) take the array of    *
*  numbers stored in arr and return the string "Arithmetic" if the sequence follows    *
*  an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If   *
*  the sequence doesn't follow either pattern return -1. An arithmetic sequence is     *
*  one where the difference between each of the numbers is consistent, where as in a   *
*  geometric sequence, each term after the first is multiplied by some constant or     *
*  common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                        *
*  example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not  *
*  be entered, and no array will contain all the same elements.                        *
*                                                                                      *
*  SOLUTION                                                                            *
*  To check for arithmetic pattern, start by getting the difference between the first  *
*  two number. Then loop thru array starting in position 2 and subtract the previous   *
*  number. If the difference is equal to the initial difference then you have an       *
*  arithmetic pattern so return arithmetic. Next repeat by getting initial difference  *
*  by dividing the first and second numbers. Loop through array starting in position   *
*  2 and compare the current number divided by previous number. If difference is       *
*  equal to the initial number then you have a geometric pattern. Else return -1.      *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) set flags for both patterns to True                                            *
*    2) Loop thru array starting in position 2 and compare difference between current  *
*       number and the previous number to see if it is equal to initial difference     *
*    3) If aritimetic pattern exists return arithmetic else check for geometric        *
*    4) Get difference between second numvber divided by first number                  *
*    5) Loop thru array starting in position 2 and compare difference between current  *
*       number and the previous to see if it is equal to the intial difference         *
*    6) If geometric pattern exists return geometric                                   *
*    7) Else return -1                                                                 *
*                                                                                      *
***************************************************************************************/

const ArithGeo = (arr) => {
  if (!arr || !arr.length || arr.length <= 2) return false

  let arith = 0
  let geo = 0

  arr.forEach((_, i) => {
    // (arr[i] - arr[i - 1]) === (arr[i + 1] - arr[i])
    if ((arr[i] - arr[i - 1]) === (arr[i + 1] - arr[i])) arith++

    // arr[i] * (arr[i] / arr[i - 1]) === arr[i + 1]
    if (arr[i] * (arr[i] / arr[i - 1]) === arr[i + 1]) geo++
  })

  if (arr.length - 2 === arith) return 'Arithmetic'
  if (arr.length - 2 === geo) return 'Geometric'

  return false;
}

console.log(ArithGeo([2, 4, 6, 8]) === 'Arithmetic') //true
console.log(ArithGeo([2, 4, 5, 8]) === 'Arithmetic') //false
console.log(ArithGeo([2, 4, 8]) === 'Arithmetic') //false
console.log(ArithGeo([2, 6, 18, 54]) === 'Geometric') //true
console.log(ArithGeo([2, 6]) === 'Geometric') //false
console.log(ArithGeo([2, 6, 3]) === 'Geometric') //false

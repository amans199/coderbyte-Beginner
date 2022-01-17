/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Counting Minutes I                                                                  *
*  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
*  str parameter being passed which will be two times (each properly formatted with    *
*  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
*  between the two times. The time will be in a 12 hour clock format. For example:     *
*  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
*  the output should be 1320.                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  Sometimes it pays to spend more time mapping out all the possibilites you might     *
*  face in solving a problem before you start programming. This challenge will have    *
*  4 possible scenarios. They are:                                                     *
*    a) both have same ampm values and first time is after second time                 *
*    b) both have same ampm values and the first time is before second time            *
*    c) have different ampm times and time1 is am                                      *
*    d) have different ampm times and time2 is pm                                      *
*                                                                                      *
*  I am going to use an object to represent both times simply because I like to use    *
*  words like hours, mins, and ampm instead of referring to an array index. To parse   *
*  the str into the two time objects I created a separate function. Now that I have    *
*  my 2 time object I just need to create a series of IF statements to correspond to   *
*  the 4 scenarios listed above to calculate the timeDiff.                             *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Use RegExp pattern to search string for pattern a...b                          *
*    2) If found return true                                                           *
*    3) Else return false                                                              *
*                                                                                      *
***************************************************************************************/



const createTimeObj = time => time && ({
    hour: Number(time.split(':')[0]) || 0,
    minutes: Number(time.split(':')[1].slice(0, -2)) || 0,
    suffix: time.toUpperCase().search(/PM/) !== -1 ? 'PM' : 'AM',
})

const timeTo24Sys = t => {
    if (!t) return

    if (t.hour === 12 && t.suffix === 'AM') return 0
    if (t.hour !== 12 && t.suffix === 'PM') return t.hour + 12

    return t.hour
}

const constructTime = time => time && new Date(_year = 0, _month = 0, _day = 0, timeTo24Sys(time), time.minutes)

const calcTimeDiff = (t1, t2) => {
    if (!t1 || !t2) return

    const diff = (constructTime(t2) - constructTime(t1)) / 60 / 1000

    return Math.round(diff >= 0 ? diff : diff + (24 * 60))
}

const calcTime = (str) => {
    if (!str) return
    const time = str.split('-')

    const t1 = createTimeObj(time[0])
    const t2 = createTimeObj(time[1])

    return calcTimeDiff(t1, t2)
}

console.log(calcTime('03:00PM-04:00PM') === 60)
console.log(calcTime('03:00AM-11:00AM') === 480)
console.log(calcTime('11:30AM-12:00PM') === 30)
console.log(calcTime('12:30PM-01:00PM') === 30)
console.log(calcTime('12:00AM-11:00AM') === 660)
console.log(calcTime('06:00PM-02:00PM') === 1200)
console.log(calcTime('11:00PM-12:00AM') === 60)
console.log(calcTime('11:30PM-12:00AM') === 30)
console.log(calcTime('11:30AM-12:30AM') === 780)
console.log(calcTime('01:30AM-01:00AM') === 1410)
console.log(calcTime('11:00AM-12:00PM') === 60)

/*
1. Write a function which takes an array of numbers, and returns the largest number in that array.
*/

/*
2. Write a function which, given a year as a number, returns whether that number is a leap year.

2000 -> true
1900 -> false
2016 -> true
*/

/*
var isItALeapYear = function(year) {
    if ( ( (year % 4) === 0 ) && ( (year % 100) === 0 )  && ( (year % 400) !== 0 ) ) {
        console.log("false")
    } else if ( (year % 4) === 0) {
        console.log("true")
    } else (
        console.log("false")
    )
}

isItALeapYear(2000)
isItALeapYear(1900)
isItALeapYear(2016)

except num/100 and not num/400
num/4 % = 0
*/

/*
3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/

/*
testArray1 = [1, 2, 5]
testArray2 = [1,2,3,4,5]
testArray3 = [3,4,5]
masterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var arrayFixer = function(testArray) {
    for (i = 0; i < (testArray.length + 1 ); i++) {
        if (testArray[i] != masterArray[i]) {
            console.log(masterArray[i])
            return
        }
    }
}

arrayFixer(testArray1)
arrayFixer(testArray2)
arrayFixer(testArray3)
*/

/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/

/*
messyArray1 = [1,1,2,3,1,2,3]
messyArray2 = [1,4,4,4,2,2,4,4,4]


var noDuplicates = function(testArray) {
    var fixedArray = []
    for (i = 0; i < testArray.length; i++) { //cycle for each index of the testArray
        if ( (fixedArray.indexOf(testArray[i]) === -1) ){ //if fixedArray doesn't already have the same value from testArray
            fixedArray.push(testArray[i]) // addes that index value to testArray
        }
    } 
    return fixedArray
}

console.log(noDuplicates(messyArray2))
*/

/*
5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".
*/

/*
"The quick brown fox" -> "Hetay uickqay rownbay oxfay".
stringEnglish
sentenceArray = stringEnglish.split(' ')
sentenceArray.array.forEach(function(element) {
    
}, this);
firstLetter = removed from beginning of word
firstLetter added to end of every word
add -"ay" to end of every word
stringPigLatin = sentenceArray.join( ' ' )

var stringEnglish1 = "The quick brown fox"

var toPigLatin = function(englishString) {
    var stringPigLatin
    var capitalizeFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // this function capitolize the first letter of the string and removes the rest of the string, then it concatinates it to the rest of the string that has the first character removed
    }
    var sentenceArray = englishString.split(' ')
    var editedSentenceArray = sentenceArray.map( function(element) {
        return element.concat(element.charAt(0)).concat('ay').slice(1) // this method string returns each element of the array after first adding the first letter to the end of each element, then adding "ay" to the end of each element, then .slice removes the first letter of each element
    });
    stringPigLatin = editedSentenceArray.join(` `)
    console.log(capitalizeFirstLetter(stringPigLatin))
} 
toPigLatin(stringEnglish1)

var pigLatinString1 = "HeTay uickqay rownbay oxfay"

var toEnglish = function(stringPigLatin) {
    var stringEnglish
    var capitalizeFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // this function capitolize the first letter of the string and removes the rest of the string, then it concatinates it to the rest of the string that has the first character removed
    }
    var sentenceArray = stringPigLatin.split(' ')
    var editedSentenceArray = sentenceArray.map( function(element) {
        return element.charAt(element.length - 3) + element.slice(0, (element.length-3)) //  psudocode to descirbe what these methods do (letter 3 from the right ) concatinated to (the element with the last 3 letters sliced off)
    });
    stringEnglish = editedSentenceArray.join(` `)
    console.log(capitalizeFirstLetter(stringEnglish))
} 
toEnglish(pigLatinString1)
*/

/*
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/

/*
var testArray1a = []
var testArray1b = []
var testArray2a = [2, 3, 4]
var testArray2b = [1, 2, 3]
var testArray3a = ["a", "c", "b"]
var testArray3b = ["a", "b", "c"]
var testArray4a = [1, 1, 1]
var testArray4b = [1, 1, 1, 1]

var arrayComparer = function(array1, array2) {
    var testArrayLength = function(array1, array2) { //function to test if lengths are the same
        return (array1.length === array2.length)
    }
    array1.sort() //sort arrays so I can then compare them even if the values are mixed up 
    array2.sort()
    var arrayContentTester = function(array1, array2) { //function to test if content is the same in arrays 
        for ( i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                return true
            }
        }
    }
    if ((array1.length === 0) && (array2.length === 0)) { // tests if both arrays have zero values, then returns true
        console.log(true)
    } else if (testArrayLength(array1, array2) === arrayContentTester(array1, array2)) { // checks if content and array length are both the same, returns true
        console.log(true)
    } else if (testArrayLength(array1, array2) !== arrayContentTester(array1, array2)) { // checks if content and array length are not the same, returns false
        console.log(false)
    } else {
        console.log("There's an error.")
    }
}

arrayComparer(testArray4a, testArray4b)
 */

 /*
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/

/*
var makeMaxValue = function(array, maxCutoff) {
    var newArray = [] // put the finished values here
    for (i = 0; i < array.length; i++) {
        if (array[i] > maxCutoff) {
            newArray.push(maxCutoff)
        } else {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(makeMaxValue([1,5,7,3,1,5,7], 3))
*/

/*
8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

-> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
-> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
*/

/*
var makeRandomArray = function() {
    var randomArray = []
    while (randomArray.length < 10) {
        randomArray.push(Math.floor(Math.random() * 100 )) // fills randomArray with 10 random intigers between 1-100
    }
    for (i = 0; i < randomArray.length; i ++) { 
        for (k = 0; k < randomArray.length; k++) { //both for loops check every value against the others
            if (k !== i) { //this keeps the program comparing two entries of the same index when it is cross referencing for duplicates
                if (randomArray[i] === randomArray[k]) {
                    randomArray.slice(i, (i + 1)).push(Math.floor(Math.random() * 100 )) //this code sees if there are two different indexes that have the same value, and if there are, it replaces that index with a new random number between 1-100
                }
            }
        }
    }
    return randomArray
}

console.log(makeRandomArray())
*/

/*
9. Write a function which takes two sorted lists and merges them into a new sorted list.

[1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
[], [] -> []
[-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
*/

/*
var combineSortedLists = function(sortedList1, sortedList2) {
    var newSortedList = []
    for (i = 0; i < sortedList1.length; i++) {
        newSortedList.push(sortedList1[i])
    }
    for (i = 0; i < sortedList2.length; i++) {
        newSortedList.push(sortedList2[i])
    }
    return newSortedList.sort(function compareNumbers (a, b) {
        return a - b;
    })
}

console.log(combineSortedLists([-1, 0, 1], [-2, 2]))
*/

/*
10. Write a function which accepts two arrays as input. 
The function should remove all the items from the shorter array, 
and add them to the end of the longer array. 
If both arrays are the same length, the function should do nothing. 
This function does not need to return a value. 
```javascript
var numbers = ['four', 'eleven']
var animals = ['cat', 'bat', 'dolphin']
arrayTransfer(numbers, animals)
console.log(numbers) // []
console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']
```
Eric's Notes: -one function to compare array.length to each other, true if array1 is longer
-if first function is true, funnel all of array2 into array1 and delete array2
if first function is false, do the opposite
*/

/*
var numbers = ['four', 'eleven']
var animals = ['cat', 'bat', 'dolphin']


var arrayTransfer = function(array1, array2) {
    var array1OriginalLength = array1.length //needed to create these originl length variables because I can't use the array.length method in the future for loops becasuse the length is getting edited while the loops were running and it defeated the purpose of the loop
    var array2OriginalLength = array2.length
    var whichIsLonger = function(array1, array2) { // this function compares array lengths and returns true/false/undefined depending on which was longer or if they were the same length
        if (array1.length > array2.length) {
            return true
        } else if (array1.length < array2.length) {
            return false
        } else if (array1.length === array2.length) {
            return undefined
        }
    }
    if (whichIsLonger(array1, array2) === true) { // if array1 was longer, pushes all of array2 into array1
        for (i = 0; i < array2OriginalLength; i++) {
            array1.push(array2.pop())
        }
    } else if (whichIsLonger(array1, array2) === false) { // if array2 was longer, pushes all of array1 into array2
        for (i = 0; i < array1OriginalLength; i++) {
            array2.push(array1.pop())
        } 
    } else if (whichIsLonger(array1, array2) === undefined) {
        return //the function returns nothing if the array's are the same length
    }
}

arrayTransfer(numbers, animals)
console.log(numbers) // []
console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']
*/

/*
11. Write a function that uses `Math.random()` to generate a random number between 0-1. 
Replace all the 3's with 8's, and replace all the 7's with 1's, 
then return this number. Note that this function should return 
a `number`, not a `string`. 
*/

var randomNumberButIHateThreesAndSevens = function() [
    Math.random()*
]

/* Eric's notes: 
-create a random number  num.toString() = "num"
-turn number into a string
-turn string into an array
-replace numbers in array
-turn array into string
-turn string into number .parseFloat()
-return number 

// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

// 'I ate toast for breakfast' -> 'breakfast'


// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that. 

// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'


// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366

// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:

// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```

// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false. 

// 17. Write a function which returns a random integer from 1 to 10.

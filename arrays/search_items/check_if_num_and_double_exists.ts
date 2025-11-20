// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

// Test cases:
// [10,2,5,3]
// [3,1,7,11]
// [7,1,14,11]
// [-20,8,-6,-14,0,-19,14,4]
// [2,3,3,0,0]
// [-2,-2,0,0,10,-19,4,6,-8]

// Working implementation with nested loops

function checkIfExist(arr: number[]): boolean {
    if (arr.length === 0) {
        return false;
    }

    let i: number = 0;
    let j: number = arr.length - 1;

    while (i < arr.length) {
        while (j > 0) {
            if ((arr[i] === 2 * arr[j] || 2 * arr[i] === arr[j]) && i !== j) {
                return true;
            }
            j--;
        }
        j = arr.length - 1;
        i++;
    }
    return false;
}

// Version without nested loops:

function checkIfExist2(arr: number[]): boolean {
    if (arr.length === 0) {
        return false;
    }

    let i: number = 0;
    let zeroes: number = 0;

    const hashTable: { [key: number]: number } = {};
    for (let index = 0; index < arr.length; index++) {
        hashTable[arr[index]] = index;
    }

    console.log(hashTable);

    while (i < arr.length) {
        const currNum = arr[i];
        const dblCurrNum = 2 * arr[i];
        const indexValue: number = hashTable[currNum];
        const indexDblValue: number =
            hashTable[dblCurrNum] === undefined
                ? indexValue
                : hashTable[dblCurrNum];

        console.log({
            val: currNum,
            indexLoc: indexValue,
            dblVal: dblCurrNum,
            indexLocDblVal: indexDblValue,
            bool: indexValue !== indexDblValue,
        });

        if (arr[i] === 0) {
            zeroes++;
        }
        if (zeroes > 1) {
            return true;
        }
        if (indexValue != indexDblValue) {
            return true;
        }
        i++;
    }
    return false;
}

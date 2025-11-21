// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

//   - arr.length >= 3
//   - There exists some i with 0 < i < arr.length - 1 such that:
//   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

// Cases:
// [2,1]
// [3,5,5]
// [0,3,2,1]
// [0,2,3,4,5,2,1,0]
// [0,1,2,3,4,5,6,7,8,9]
// [9,8,7,6,5,4,3,2,1,0]

function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) {
        return false;
    }

    let maxValue: number = 0;
    let indexMaxValue: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            indexMaxValue = i;
        }
    }

    console.log(arr.toString());
    console.log({ maxValue, indexMaxValue });

    if (indexMaxValue === arr.length - 1 || indexMaxValue === 0) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i < indexMaxValue) {
            console.log({
                actual: arr[i],
                siguiente: arr[i + 1],
            });

            if (arr[i + 1] <= arr[i]) {
                return false;
            }
        } else if (i > indexMaxValue) {
            console.log({
                actual: arr[i],
                anterior: arr[i - 1],
            });

            if (arr[i - 1] <= arr[i]) {
                return false;
            }
        }
    }

    return true;
}

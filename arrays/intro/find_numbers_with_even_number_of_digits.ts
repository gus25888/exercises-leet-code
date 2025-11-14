// Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105

function findNumbers(nums: number[]): number {
    let evenDigitNumQty = 0;
    let currQtyDigit = 1;

    nums.forEach((num) => {
        while (num >= 10) {
            num /= 10;
            currQtyDigit++;
        }

        if (currQtyDigit % 2 === 0) {
            evenDigitNumQty++;
        }
        currQtyDigit = 1;
    });

    return evenDigitNumQty;
}

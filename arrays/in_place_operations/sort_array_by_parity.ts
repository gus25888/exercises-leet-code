// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

// Test Cases:

// [3,1,2,4]
// [4,8,5,3,7,9,6,0]
// [0]
// [4,8,12,16]
// [3,5,7]

function sortArrayByParity(nums: number[]): number[] {
    let evenQty: number = 0,
        left: number = 0,
        right: number = nums.length - 1,
        totalEvens: number = 0,
        swap: number = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            totalEvens++;
        }
    }

    while (evenQty < totalEvens) {
        if (nums[left] % 2 === 0) {
            left++;
            evenQty++;
        } else {
            if (nums[right] % 2 === 0) {
                swap = nums[right];
                nums[right] = nums[left];
                nums[left] = swap;
                left++;
                right--;
                evenQty++;
            } else {
                right--;
            }
        }
    }

    return nums;
}

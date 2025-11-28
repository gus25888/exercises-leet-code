// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// O(n) time and space.

// function findDisappearedNumbers(nums: number[]): number[] {
//     const values = new Set(nums);
//     const numsNotFound: number[] = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (!values.has(i + 1)) {
//             numsNotFound.push(i + 1);
//         }
//     }

//     return numsNotFound;
// }

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

function findDisappearedNumbers(nums: number[]): number[] {
    const numsNotFound: number[] = [];
    let index = 0,
        j = 0;

    for (let i = 0; i < nums.length; i++) {
        j = (nums[i] < 0 ? nums[i] * -1 : nums[i]) - 1;
        if (nums[j] > 0) {
            nums[j] *= -1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            numsNotFound[index] = i + 1;
            index++;
        }
    }

    return numsNotFound;
}

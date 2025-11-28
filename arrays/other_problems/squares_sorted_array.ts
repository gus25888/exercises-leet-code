// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// O(n) approach
function sortedSquares(nums: number[]): number[] {
    const numsSquared: number[] = [];
    let left = 0,
        right = nums.length - 1,
        index = nums.length - 1;
    while (index > -1) {
        const absValLeft = nums[left] < 0 ? nums[left] * -1 : nums[left];
        const absValRight = nums[right] < 0 ? nums[right] * -1 : nums[right];
        if (absValLeft > absValRight) {
            numsSquared[index] = nums[left] * nums[left];
            left++;
        } else {
            numsSquared[index] = nums[right] * nums[right];
            right--;
        }

        index--;
    }

    return numsSquared;
}

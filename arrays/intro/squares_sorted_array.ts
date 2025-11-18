// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

function sortedSquares(nums: number[]): number[] {
    const numsSquared = nums.map((num) => num * num);

    const sortFn = (arr: number[]) => {
        let swap: number;
        let index: number = 0;
        let flag: number = 0;
        while (index < arr.length) {
            if (arr[index] > arr[index + 1]) {
                swap = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = swap;
                flag++;
            }
            index++;
        }
        return flag;
    };

    for (let i = 0; i < numsSquared.length; i++) {
        if (sortFn(numsSquared) === 0) {
            break;
        }
    }

    return numsSquared;
}

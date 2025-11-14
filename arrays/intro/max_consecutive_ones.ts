// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
function findMaxConsecutiveOnes(nums: number[]): number {
    let onesQty = 0;
    let onesMaxQty = 0;

    nums.forEach((num) => {
        if (num === 1) {
            onesQty++;
            onesMaxQty = onesQty > onesMaxQty ? onesQty : onesMaxQty;
        } else {
            onesQty = 0;
        }
    });
    return onesMaxQty;
}

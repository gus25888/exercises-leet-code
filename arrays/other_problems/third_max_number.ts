// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// Constraints:

// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Can you find an O(n) solution?

function thirdMax(nums: number[]): number {
    // ¿Cómo determinar el tercer valor máximo de un array?
    // Recorrer el array de principio a fin
    // Se compara el número actual, se asigna:
    // A máximo primero, si es mayor que maximo primero.
    // A máximo segundo, si es menor que el máximo primero.
    // A máximo tercero, si es menor que el máximo segundo.
    // Sino, se continua con el siguiente.

    // ¿Cómo mantener el valor máximo?
    // Usando un objeto con propiedades max1,max2,max3 que contengan los 3 valores.

    // ¿Cuándo puede ser que NO haya un tercer máximo?
    // Si el array tiene solo dos elementos distintos. Esto se puede determinar si el max3 esta vacío o si es igual al max2.
    const minVal = (-2) ** 31 - 1;
    const maxValues = {
        max1: minVal,
        max2: minVal,
        max3: minVal,
    };

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValues.max1) {
            maxValues.max3 = maxValues.max2;
            maxValues.max2 = maxValues.max1;
            maxValues.max1 = nums[i];
        } else if (nums[i] > maxValues.max2 && nums[i] < maxValues.max1) {
            maxValues.max3 = maxValues.max2;
            maxValues.max2 = nums[i];
        } else if (nums[i] > maxValues.max3 && nums[i] < maxValues.max2) {
            maxValues.max3 = nums[i];
        }
    }

    return maxValues.max3 === minVal ? maxValues.max1 : maxValues.max3;
}

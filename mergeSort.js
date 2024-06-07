function mergeSort(arr) {
    if (arr.length === 1 || arr.length === 0) return arr;
    let tempLength = Math.floor(arr.length/2)
    let left = arr.slice(0, tempLength)
    let right = arr.slice(tempLength)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else if (left[leftIndex] > right[rightIndex]){
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])) // [79, 100, 105, 110]
console.log(mergeSort([]))
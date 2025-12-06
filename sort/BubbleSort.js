const bubbleSort = (array) => {

    let n = array.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;

}


const arr = [213, 32, 543, 65, 39202, 43, 567, 245, 245, 90];
console.log(arr);
console.log(bubbleSort(arr));
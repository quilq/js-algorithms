const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let newArray = [];
  let i = 0;
  let ii = 0;
  while ((i < left.length) && (ii < right.length)) {
    if (left[i] >= right[ii]) {
      newArray.push(left[i]);
      i++;
    } else {
      newArray.push(right[ii]);
      ii++;
    }
  }
  if (ii < right.length) {
    newArray.push(...right.slice(ii));
  }
  if (i < left.length) {
    newArray.push(...left.slice(i));
  }

  return newArray;
}

const answer = mergeSort(numbers);
console.log(answer);
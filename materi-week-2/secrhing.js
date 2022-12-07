// Serching adalahsebuah proses untuk mencari sebuah nilai pada data.
// ada beberapa cara.
// 1. Linier search

function linnarSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// -1 digunakan untuk saat pencarian datanya tidak ketemu.

// find dan filter.

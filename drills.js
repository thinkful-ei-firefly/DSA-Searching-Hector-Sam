// 1.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8
// it would take 4 steps

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// it would return null

function findBook(lib, dewey, title, start = 0, end = lib.length) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (lib[mid].dewey === dewey) {
      if (lib[mid].title === title) {
        return lib[mid];
      }
    }
    if (lib[mid].dewey > dewey) {
      findBook(lib, dewey, title, start, mid - 1);
    }
    if (lib[mid].dewey < dewey) {
      findBook(lib, dewey, title, mid + 1, end);
    }
  }
  return 'Book not found';
}

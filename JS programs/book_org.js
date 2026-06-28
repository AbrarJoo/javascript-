const books = [
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018,
  },
  {
    title: "Rich Dad Poor Dad",
    authorName: "Robert Kiyosaki and Sharon Lechter",
    releaseYear: 1997,
  },
  {
    title: "Zero to Sold",
    authorName: "Arvid Kahl",
    releaseYear: 2020,
  },
  {
    title: "The Hobbit",
    authorName: "J. R. R. Tolkien",
    releaseYear: 1937,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

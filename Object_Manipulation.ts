type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: `You Don't Know JS`, author: "Kyle Simpson", year: 2015 }
];

function getBookTitles(bookList: Book[]): string[] {
  return bookList.map(book => book.title);
}

console.log(getBookTitles(books));
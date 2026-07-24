import { fetchBooks, searcbyTitle } from "./services/service";
import type { BookPreview } from "./types/types";
import { createRow } from "./helper/helper";

const books: BookPreview[] = await fetchBooks();
const tbody =
  document.querySelector<HTMLTableSectionElement>("#books-table tbody");
// display books in index
for (const book of books) {
  tbody?.appendChild(createRow(book));
}
// display books by search (title)
const search = document.querySelector<HTMLInputElement>("#search");
search?.addEventListener("input", async (e) => {
  const target = e.target as HTMLInputElement;
  tbody?.replaceChildren();
  const filteredBooks: BookPreview[] = await searcbyTitle(target.value);
  for (const book of filteredBooks) {
    tbody?.appendChild(createRow(book));
  }
}); 
//Implement a filter to show only books from a specific publisher
const grouped_books_by_publisher = Object.groupBy(
  books,
  (book) => book.publisher,
);
const publishers = Object.keys(grouped_books_by_publisher);
const publisher_selector =
  document.querySelector<HTMLSelectElement>("#by-publisher");

for (const publisher of publishers) {
  const option = document.createElement("option");
  option.value = publisher;
  option.innerText = publisher;
  publisher_selector?.append(option);
}
publisher_selector?.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  const book_by_publisher: BookPreview[] =
    grouped_books_by_publisher[target.value] ?? [];
  tbody?.replaceChildren();
  for (const book of book_by_publisher) {
    tbody?.appendChild(createRow(book));
  }
});
 
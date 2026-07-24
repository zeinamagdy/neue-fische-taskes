import { fetchBooks, searcbyTitle } from "./services/service";
import type { BookPreview } from "./types/types";
import { createRow } from "./helper/helper";

const books: BookPreview[] = await fetchBooks();
console.log("fetch books", books[0]);

const tbody =
  document.querySelector<HTMLTableSectionElement>("#books-table tbody");
const search = document.querySelector<HTMLInputElement>("#search");
// display books in index
for (const book of books) {
  tbody?.appendChild(createRow(book));
}
// display books by search (title)
search?.addEventListener("input", async (e) => {
  const target = e.target as HTMLInputElement;
  tbody?.replaceChildren();
  const filteredBooks: BookPreview[] = await searcbyTitle(target.value);
  for (const book of filteredBooks) {
    tbody?.appendChild(createRow(book));
  }
});

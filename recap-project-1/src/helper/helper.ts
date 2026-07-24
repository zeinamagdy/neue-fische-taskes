import type { BookPreview } from "../types/types";


// TODO: Refactor and get better way for the buttons
export function createRow(book: BookPreview): HTMLTableRowElement {
  const row = document.createElement("tr");

  const favICon = document.createElement("button");
  favICon.className = "button button-clear fav-btn"
  favICon.innerHTML = `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="fav"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>`

  const titleCell = document.createElement("td");
  titleCell.textContent = book.title;

  const isbnCell = document.createElement("td");
  isbnCell.textContent = book.isbn;

  const authorCell = document.createElement("td");
  authorCell.textContent = book.author;

  const publisherCell = document.createElement("td");
  publisherCell.textContent = book.publisher;

  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "Detail";

  row.appendChild(favICon);
  row.appendChild(titleCell);
  row.appendChild(isbnCell);
  row.appendChild(authorCell);
  row.appendChild(publisherCell);
  row.appendChild(detailsBtn);

  return row;
}



import { fetcBookDitailes } from "./services/service";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isbn: string | null = urlParams.get("isbn");

const bookDetails = await fetcBookDitailes(isbn);

document.querySelector<HTMLSpanElement>("#title")!.textContent =
  bookDetails.title;
document.querySelector<HTMLSpanElement>("#subtitle")!.textContent =
  bookDetails.subtitle;
document.querySelector<HTMLParagraphElement>("#abstract")!.textContent =
  bookDetails.abstract;

document.querySelector<HTMLSpanElement>("#author")!.textContent =
  bookDetails.author;
document.querySelector<HTMLSpanElement>("#publisher")!.textContent =
  bookDetails.publisher;
document.querySelector<HTMLSpanElement>("#pages_count")!.textContent = String(
  bookDetails.numPages,
);
const img = document.createElement("img")
img.src = bookDetails.cover
document.querySelector<HTMLDivElement>("#book_cover")!.appendChild(img)

console.log("bookdetails", bookDetails);
//debounce

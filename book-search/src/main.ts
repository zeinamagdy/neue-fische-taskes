import {  fetchBooks } from "./types.js";
import {Book} from './types.js'

const search_form = document.getElementById("search-form") as HTMLFormElement;
const book_list = document.getElementById("book-list") as HTMLUListElement;



search_form.addEventListener("submit", async(e: SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  console.log("test submit", formData.get("query"));
  const term = String(formData.get("query"));
  const books = await fetchBooks(term);
  console.log("books", books);
  books.forEach(book => {
      const card = movieCard(book)
      const li_element = document.createElement("li")
      li_element.append(card)
      book_list.append(li_element)
  });
});

function movieCard (data: Book): HTMLElement{
  const article = document.createElement("article")
  article.innerHTML=`<h2>${data.title}</h2>
  <span> ${data.authors.split(',')[0]}</span>`

  return article
  
}

console.log("form", search_form);

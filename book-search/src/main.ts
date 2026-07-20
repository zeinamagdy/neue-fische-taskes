const search_form = document.getElementById("search-form") as HTMLFormElement;
const book_list = document.getElementById("book-list") as HTMLUListElement;

search_form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
      console.log("test submit", formData.get("query"))

});

console.log("form", search_form);

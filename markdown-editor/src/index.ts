import data from "./data/note.json";
import type {Note} from "./data/note_type.ts";
const todo_list = document.querySelector<HTMLDivElement>("#todo-list");

for (let i = 0; i < data.length; i++) {
    todo_list?.append(NoteCrad(data?[i]))
 
}

function NoteCrad(note: Note): HTMLElement {
  const article = document.createElement("article");
  article.innerHTML = `<h2>${note.slug}</h2>
    <Span>${note.content}</span>`;
  return article;
}

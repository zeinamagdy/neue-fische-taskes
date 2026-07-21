//Add Items to List and delete
const todoInput = document.querySelector<HTMLInputElement>("#todoInput");
const addTodo = document.querySelector<HTMLButtonElement>("#addTodo");
const todoList = document.querySelector<HTMLUListElement>("#todoList");

addTodo?.addEventListener("click", (e) => {
  console.log("tesr", todoInput?.value);
  const li_element = document.createElement("li");
  li_element.innerHTML = `<span>${todoInput?.value}</span>
 <button id=${todoInput?.value} class="delete-btn">del</button>`;
 console.log("el",li_element)
  todoList?.append(li_element);
  if (todoInput) todoInput.value = "";
});



todoList?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("delete-btn")) {
    // Find the closest <li> ancestor and destroy it
    const li = target.closest("li");
    if (li) {
      li.remove();
    }
  }
});

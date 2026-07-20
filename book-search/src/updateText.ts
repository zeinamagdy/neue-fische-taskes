const hellobtn = document.querySelector<HTMLButtonElement>("#helloBtn");
const output = document.querySelector<HTMLParagraphElement>("#output");

hellobtn?.addEventListener("click", (e) => {
  if (output) output.textContent = "Hello from TypeScript!";
});

const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");
const displayName =
  document.querySelector<HTMLParagraphElement>("#displayName");

submitBtn?.addEventListener("click", (e) => {
  if (nameInput && displayName) displayName.textContent = nameInput.value;
});

const toggleBtn = document.querySelector<HTMLInputElement>("#toggleBtn");
const hiddenText = document.querySelector<HTMLParagraphElement>("#hiddenText");
// working in hidde and show
toggleBtn?.addEventListener("click", (e) => {
  if (hiddenText?.style.display === "none") {
    hiddenText.style.display = "";
  } else hiddenText.style.display = "none";
});

//Add Items to List and delete
const itemInput = document.querySelector<HTMLInputElement>("#itemInput");
const addBtn = document.querySelector<HTMLButtonElement>("#addBtn");
const itemList = document.querySelector<HTMLUListElement>("#itemList");

addBtn?.addEventListener("click", (e) => {
  const li_element = document.createElement("li");
  li_element.innerHTML = `<span>${itemInput?.value}</span>
 <button id=${itemInput?.value} class="delete-btn">del</button>`;
  itemList?.append(li_element);
  if (itemInput) itemInput.value = "";
});
itemList?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("delete-btn")) {
    // Find the closest <li> ancestor and destroy it
    const li = target.closest("li");
    if (li) {
      li.remove();
    }
  }
});
//Change Background Color colorSelect
const colorSelect = document.querySelector<HTMLInputElement>("#colorSelect");
const colorBox = document.querySelector<HTMLParagraphElement>("#colorBox");
colorSelect?.addEventListener("click", (e) => {
  console.log(colorSelect.value);
  if (colorBox && colorSelect.value)
    colorBox.style.backgroundColor = colorSelect.value;
});

//Character Count
const textInput = document.querySelector<HTMLInputElement>("#textInput");
const charCount =
  document.querySelector<HTMLParagraphElement>("#charCount") || null;

textInput?.addEventListener("input", (e) => {
  const target = e.target as HTMLTextAreaElement;
  const currentLength = target.value.length;
  if (charCount) charCount.textContent = `Characters: ${currentLength}`;
});

import type { BookPreview } from "../types/types";

const base_url = "http://localhost:4730";

export async function fetchBooks(): Promise<BookPreview[]> {
  const response = await fetch(base_url + "/books");
  const data = await response.json();
  console.log("book", data[0] as BookPreview[]); // it deosnt work in console
  return data as BookPreview[];
}

export async function searcbyTitle(title: string): Promise<BookPreview[]> {
    console.log("searcg", title)
  const response = await fetch(`${base_url}/books?q=${title}`);
  const data = await response.json();
  console.log("book search", data[0] as BookPreview[]); // it deosnt work in console
  return data as BookPreview[];
}

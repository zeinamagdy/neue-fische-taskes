/*{
  "status": "ok",
  "total": "87",
  "books": [
    {
      "id": "3030168778",
      "title": "Programming for Computations - Python",
      "subtitle": "A Gentle Introduction to Numerical Simulations with Python 3.6",
      "authors": "Svein Linge, Hans Petter Langtangen",
      "image": "https://www.dbooks.org/img/books/3030168778s.jpg",
      "url": "https://www.dbooks.org/programming-for-computations-python-3030168778/"
    }
  ]
}
*/

export interface Book {
  id: number;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: URL;
}

export interface SearchResult {
  status: "ok";
  total: number;
  books: Book[];
}

export async function fetchBooks(term: string): Promise<Book[]> {
const url = `https://www.dbooks.org/api/search/${term}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.books as Book[];
}

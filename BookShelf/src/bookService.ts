/*Generic response wrapper

Define a generic ApiResponse<T> interface with status: number, message: string, and data: T.

Service module

Create a file src/bookService.ts that imports the types from your declaration file using import type. Write the following function signatures (stub implementations are fine):

fetchBooks(): Promise<ApiResponse<BookPreview[]>>
fetchBook(id: EntityId): Promise<ApiResponse<Book>>
createBook(payload: BookCreatePayload): Promise<ApiResponse<Book>>
updateBook(id: EntityId, changes: BookUpdatePayload): Promise<ApiResponse<Book>>
parseIsbn(isbn: string): IsbnParts
Verify that the compiler accepts your code by running tsc --noEmit.

*/
import type {
  ApiResponse,
  BookPreview,
  Book,
  EntityId,
  BookUpdatePayload,
  BookCreatePayload,
  IsbnParts,
} from "../types/book";

const dumb_data = {
  status: 200,
  message: "Book created",
  data: {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    isAvailable: true,
    isbn: "76312766734",
    createdAt: "gsgsgs",
    updatedAt: "gsggs",
  },
};

async function fetchBooks(): Promise<ApiResponse<BookPreview[]>> {
  return {
    status: 200,
    message: "Books fetched",
    data: [
      { EntityId: 1, title: "Clean Code", author: "Robert C. Martin" },
      { EntityId: 2, title: "Refactoring", author: "Martin Fowler" },
    ],
  };
}

async function fetchBook(id: EntityId): Promise<ApiResponse<Book>> {
  return {
    status: 200,
    message: "Books fetched",
    data: {
      id: id,
      title: "Clean Code",
      author: "Robert C. Martin",
      isAvailable: true,
      isbn: "76312766734",
      createdAt: "gsgsgs",
      updatedAt: "gsggs",
    },
  };
}

async function createBook(
  payload: BookCreatePayload,
): Promise<ApiResponse<Book>> {
  return dumb_data;
}

async function updateBook(
  id: EntityId,
  changes: BookUpdatePayload,
): Promise<ApiResponse<Book>> {
  return dumb_data;
}
function parseIsbn(isbn: string): IsbnParts {
  return [1,"test","test"]
}

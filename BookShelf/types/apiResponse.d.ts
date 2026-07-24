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
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

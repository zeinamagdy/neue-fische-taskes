/*Base types

Create a file types/book.d.ts with the following:

A type alias EntityId that accepts either a number or a string
A type Timestamped with createdAt: Date and updatedAt: Date
A type HasId with id: EntityId
A Book type that combines HasId, Timestamped, and book-specific fields (title, author, isbn, isAvailable) using intersection types
A tuple type IsbnParts representing the three components of an ISBN: group (number), publisher (string), and title identifier (string)
Derived payload types

In the same file, define these types using utility types. Do not repeat properties manually:

BookCreatePayload: all Book properties except id, createdAt, and updatedAt
BookUpdatePayload: same as BookCreatePayload, but every field is optional
BookPreview: only id, title, and author from Book
*/
export type EntityId = number | string;
type Timestamped = {
  createdAt: string;
  updatedAt: string;
};
export type HasId = { id: EntityId };

export type BookFields = {
  title: string;
  author: strig;
  isbn: string;
  isAvailable: boolean;
};

export type Book = HasId & Timestamped & BookFields;

export type IsbnParts = [number, string, string];
export type BookCreatePayload = Omit<
  Book,
  "EntityId" | "createdAt" | "updatedAt"
>;
export type BookUpdatePayload = Partial<BookCreatePayload>;
export type BookPreview = Pick<Book, "EntityId" | "title" | "author">;

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

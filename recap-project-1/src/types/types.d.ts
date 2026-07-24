export type Book = {
  title: string;
  isbn: string;
  subtitle: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
};

export type BookPreview = Pick<Book, "isbn" | "title" | "author" | "publisher">;

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

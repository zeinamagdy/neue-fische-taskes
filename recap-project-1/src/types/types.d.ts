
export type Book ={
title: string,
isbn:string,
subtitle:string,
abstract:string,
numPages:number,
author: string,
publisher:string,
price:string,
cover:string
}


export type BookCreatePayload = Omit<
  Book,
  "EntityId" | "createdAt" | "updatedAt"
>;
export type BookUpdatePayload = Partial<BookCreatePayload>;
export type BookPreview = Pick<Book,  "isbn"| "title" | "author"|"publisher">;

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

/**
  {
    "id": 1,
    "title": "Note 1",
    "slug": "note-1",
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "content": "# Note 1\nThis is the content of note 1."
  },
 */
export type Note = {
    id:number;
    slug:string;
    createdAt: Date;
    updatedAt:Date;
    content:string
}
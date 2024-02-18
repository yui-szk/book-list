"use client";

import { BookList } from "@/components/BookList";

export default function Page() {
  return (
    <div>
      <h1>Book-list</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <input type="text" placeholder="add book" />
        <input type="date" />
        <button type="submit">Add</button>
      </form>
      <div>
        <BookList />
      </div>
    </div>
  );
}

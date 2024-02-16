import { BookList } from "@/components/BookList";

export default function Page() {
  return (
    <div>
      <div>Book-list</div>
      <input type="text" />
      <div>
        <BookList />
      </div>
    </div>
  );
}

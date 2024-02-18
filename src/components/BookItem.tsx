import { Book } from "@/types/book";

type Props = {
  book: Book;
};

export function BookItem({ book }: Props) {
  return (
    <div>
      <input type="text" value={book.title} />
      <input type="date" value={formatDate(book.readDate)} />
    </div>
  );
}

// Date => "2024-01-10"の形のstring型にする
function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

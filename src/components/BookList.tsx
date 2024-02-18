"use client";

import { useState } from "react";
import { BookItem } from "./BookItem";
import type { Book } from "@/types/book";

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  function addBook() {
    const newBook: Book = {
      id: 1,
      title: "",
      readDate: new Date(),
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
}

// dddのところに新しいbookを追加

// MEMO
// ジェネリクス
// 型を定義する時に決まるようにする
// useState

// type Output<T> = (arg: T) => T;
// // stringのときはstring, numberのときはnumberを返す
// // string | numberだとstring->numberのときにエラーしない
// const out: Output<String> = (arg) => {
//   return "";
// };

// function out<T>(arg: T): T {
//   return arg;
// }
// out(1); // 型推論
// out("1");

// out<string>(1); // error

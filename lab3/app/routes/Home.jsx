import { useContext, useState } from "react";
import Book from "../Components/Book";
import { BooksContext } from "../Contexts/BooksContext";

export function meta() {
  return [
    { title: "Ksiegrarnia" },
    { name: "description", content: "Website for Ksiegrarnia" },
  ];
}

export default function Home() {
  const types = ["academia", "work", "home"];
  const { bookList, setBookList } = useContext(BooksContext);
  const [query, setQuery] = useState("");
  const [searchField, setSearchField] = useState("text");

  const handleDone = (bookID) => {
    setBookList((prev) =>
      prev.map((it) =>
        it.id === bookID
          ? {
              ...it,
              completed: true,
              dateCompleted: new Date().toLocaleDateString(),
            }
          : it
      )
    );
  };

  const bookListHTML = bookList
    .filter((it) => {
      const value = it[searchField];
      return value?.toString().toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => a.completed - b.completed)
    .map((it) => <Book key={it.id} book={it} handleDone={handleDone} />);

  return (
    <main className="list-vertical">
      <div className="list-horizontal" style={{ gap: "0.5rem" }}>
        <input
          placeholder={`Search by ${searchField}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <select id="query"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          <option value="text">Title</option>
          <option value="author">Author</option>
          <option value="pages">Pages</option>
          <option value="price">Price</option>
        </select>
      </div>

      {bookListHTML}
    </main>
  );
}


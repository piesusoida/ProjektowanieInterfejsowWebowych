import { useContext, useState } from "react";
import { BooksContext } from "../Contexts/BooksContext";
import TypeSelector from "../Components/TypeSelector";

export function meta() {
  return [
    { title: "NEW book" },
    { name: "description", content: "Website for ksiegrarnia" },
  ];
}

export default function New() {
  const { bookList, setBookList } = useContext(BooksContext);
  const [newBook, setNewBook] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");

  const handleNewBook = (e) => {
    e.preventDefault();
    if (!newBook || !author || !pages || !price) return;

    const tempBook = {
      id: bookList.length + 1,
      text: newBook,
      type: selectedCategory,
      author: author,
      pages: Number(pages),
      price: parseFloat(price),
    };

    setBookList((prev) => prev.concat([tempBook]));

    setNewBook("");
    setAuthor("");
    setPages("");
    setPrice("");
  };

  return (
    <main className="list-vertical">
      <form className="list-vertical">
        <input
          placeholder="New BOOK"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          autoFocus
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TypeSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button id="Add" onClick={handleNewBook} >Add</button>
      </form>
    </main>
  );
}

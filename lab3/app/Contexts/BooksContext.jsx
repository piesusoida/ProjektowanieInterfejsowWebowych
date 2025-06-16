import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      text: "hobbit",
      author: "Tolkien",
      pages: "12",
      price: "30",
      type: "academia",
    }, 
    {
      id: 2,
      text: "Harry Potter",
      author: "Rowling",
      pages: "42",
      price: "40",
      type: "academia",
    }, 
    
  ]);

  return (
    <BooksContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
};
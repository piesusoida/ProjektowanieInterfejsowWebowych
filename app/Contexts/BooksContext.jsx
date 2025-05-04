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
    
  ]);

  return (
    <BooksContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
};
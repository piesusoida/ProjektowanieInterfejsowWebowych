export default ({ book, handleDone }) => {
  const typer = (type) => {
    if (type === "academia") return "📑";
    if (type === "home") return "🍞";
    if (type === "work") return "🏡";
  };
  return (
    <article
      className={`list-horizontal ${book.completed && "done"}`}
    >
      <span>
        <span className="book-field">{typer(book.type)}</span>
        <span className="book-field">{book.text}</span>
        <span className="book-field">{book.author}</span>
        <span className="book-field">{book.price}</span>
        <span className="book-field">{book.pages}</span>
        <button onClick={() => console.log("Edit book:", book.id)}>Edit</button>
        <button onClick={() => console.log("Delete book:", book.id)}>Delete</button>
      </span>
      {book.completed && <small className="center">{book.dateCompleted}</small>}
    </article>
  );
};

//   const typer = useCallback((type) => {
//     x = x + 1;
//     console.log(x);
//     if (type === "academia") return "🎓";
//     if (type === "work") return "👩‍💻";
//     if (type === "home") return "🏡";
//   });

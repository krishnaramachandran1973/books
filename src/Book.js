const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello World");
  };

  const displayAuthorHandler = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h6>{title}</h6>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <button onClick={() => displayAuthorHandler(author)}>
        Display Author
      </button>
    </article>
  );
};

export default Book;

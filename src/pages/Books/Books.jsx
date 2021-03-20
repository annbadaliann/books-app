import { Grid } from "@material-ui/core";
import React from "react";
import Book from "./Book";

function Books() {
  const books = [
    {
      id: 1,
      title: "a",
      author: "a",
      language: "1",
      description: "a",
      totalPages: "25",
    },
    {
      id: 2,
      title: "a",
      author: "a",
      language: "1",
      description: "a",
      totalPages: "25",
    },
  ];

  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid item md={4} key={book.id}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Books;

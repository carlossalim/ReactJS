import React from 'react'
import { useQuery } from '@apollo/client';
import { LIST_BOOK_DETAIL } from '../queries/queries'


function BookDetails(props) {

  const bookId = props.bookId.selectedBook
  const { loading, error, data } = useQuery(LIST_BOOK_DETAIL, { variables: { "id": bookId }, });

  if (loading) {
    console.log('Loading ...')
    return <p>Loading...</p>;
  }
  if (error) {
    console.log('Error: ', error)
    if (bookId === "") {
      return <p>Click a book to see Details</p>;
    }
    return <p>Error :(</p>;
  }

  function authorsBooks(data1) {
    // console.log('data1', data1)
    return data1.map(({ id, name }) => (
      <div className="ml-5 p1" key={id}>{name}</div>
    ))
  }

  return (
    // { id, name, genre, author } = book;
    <div className="container bg-secondary ml6" id={data.book.id}>
      <h5>Details:</h5>
      <p>Author: {data.book.author.name}    </p>
      <p>Genre: {data.book.genre}      </p>
      <p className="bg-light">Books from The same author:
      {authorsBooks(data.book.author.books)}
      </p>
      <br />
    </div>

  );
}

export default BookDetails;

      // {/* {authorsBooks(author.books)} */}
      // {/* author.books.map(({ id, name }) => (
      //   <p key={id}>{name}</p>
      // )) */}
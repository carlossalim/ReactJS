import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { LIST_ALL_BOOK } from '../queries/queries'
import BookDetails from './BookDetails'

function BookList() {
  const [selectedBook, setSelectedBook] = useState("");
  const { loading, error, data } = useQuery(LIST_ALL_BOOK);

  if (loading) {
    console.log('Loading ...')
    return <p>Loading...</p>;
  }
  if (error) {
    // console.log('Error: ', error)
    if (selectedBook === "") {
      return <p>Click a book to see Details</p>;
    }
    return <p>Error :(</p>;
  }

  // console.log('data: ', data)
  // console.log('selectedBook: ', selectedBook)


  function displayBooks(data) {
    // console.log('data2: ', data)
    if (data.length > 0) { setSelectedBook(data[0].id) }
    return data.books.map(({ id, name, genre, author }) => (
      <div key={id}>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action" name={id} onClick={e => {
            setSelectedBook(id)
          }}>
            {author.name}: {name}: {genre}
          </li>
        </ul>
      </div>

    ));
  }
  return <div>
    {displayBooks(data)}
    <BookDetails bookId={{ selectedBook }} />
  </div>

}

export default BookList;
import React from 'react'
import { useQuery, gql } from '@apollo/client';

const LIST_ALL_BOOK = gql`
  {
    books {
      id
      name
      genre
      author{
        name
      }
    }
  }
`;


function BookList() {

    const { loading, error, data } = useQuery(LIST_ALL_BOOK);

    if (loading) {
        console.log('Loading ...')
        return <p>Loading...</p>;
    }
    if (error) {
        console.log('Error: ', error)
        return <p>Error :(</p>;
    }

    return data.books.map(({ id, name, genre, author }) => (
        <div key={id}>
            <ul>
                <li name={id}   > {author.name}: {name}: {genre}</li>
            </ul>
        </div>
    ));
}

export default BookList;
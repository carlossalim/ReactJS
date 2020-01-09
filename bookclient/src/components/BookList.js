import React from 'react'
import { useQuery, gql } from '@apollo/client';

const LIST_ALL_BOOK = gql`
  {
    books {
      id
      name
      genre
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

    return data.books.map(({ id, name, genre }) => (
        <div key={id}>
            <ul>
                <li name={id}   > {id}: {name}: {genre}</li>
            </ul>
        </div>
    ));
}

export default BookList;
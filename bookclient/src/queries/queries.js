import { gql } from '@apollo/client';

export const LIST_ALL_AUTHORS = gql`
  {
    authors {
        id
        name
    }
  }
`;

export const LIST_ALL_BOOK = gql`
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

export const LIST_BOOK_DETAIL = gql`
query($id: ID!)
{
  book(id:$id) {
    id
    name
    genre
    author{
      name
      books{
          name
          genre
      }
    }
  }
}
`;

export const ADD_BOOK = gql`
mutation addBook($name: String!, $genre: String!, $authorId: String!){
    addBook(name:$name, genre:$genre,  authorId:$authorId){
      name genre authorId
    }
}`

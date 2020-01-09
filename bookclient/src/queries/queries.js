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

export const ADD_BOOK = gql`
mutation addBook($name: String!, $genre: String!, $authorId: String!){
    addBook(name:$name, genre:$genre,  authorId:$authorId){
      name genre authorId
    }
}`

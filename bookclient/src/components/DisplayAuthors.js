import React from 'react'
import { useQuery, gql } from '@apollo/client';


const LIST_ALL_AUTHORS = gql`
  {
    authors {
        id
        name
    }
  }
`;


function DisplyaAuthors() {
  const { loading, error, data } = useQuery(LIST_ALL_AUTHORS);
  // console.log(data)
  if (loading) return <option disabled>Loading...</option>;
  if (error) return <option>Error :(</option>;

  return data.authors.map(({ id, name }) => (
    <option key={id} value={id} > {name} </option>
  ));
}

export default DisplyaAuthors;

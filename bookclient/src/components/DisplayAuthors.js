import React from 'react'
import { useQuery } from '@apollo/client';
import { LIST_ALL_AUTHORS } from '../queries/queries'




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

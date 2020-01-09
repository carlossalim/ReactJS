import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
// import gql from 'graphql-tag';


import Booklist from './components/BookList'
import AddBook from './components/AddBook'
import DisplyaAuthors from './components/DisplayAuthors';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {

  // client.query({
  //   query: gql`
  //        {
  //         books {
  //           id
  //           name
  //           genre
  //         }
  //       }
  //     `,
  // })
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));


  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Booklist />
        
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;

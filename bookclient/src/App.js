import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
// import gql from 'graphql-tag';


import Booklist from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {

  return (
    <ApolloProvider client={client} >
      <div className="container">
        <div className="jumbotron">
          <h1>Books:</h1>
          <div className="container">
            <Booklist />
          </div>
        </div>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;

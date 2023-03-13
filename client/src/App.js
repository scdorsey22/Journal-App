import React from "react";
import './App.css'
import Entries from "./components/Entries";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import { Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, gql, useMutation } from '@apollo/client'


const graphQLServerUrl = 'https://my-journal.scdorsey22.workers.dev/'

const client = new ApolloClient({
  uri: graphQLServerUrl,
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route path="/" element={<EntryForm />}></Route>
        <Route path="/entries" element={<Entries />}></Route>
      </Routes>
    </ApolloProvider>
  )
}

export default App
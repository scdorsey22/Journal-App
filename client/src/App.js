import React from "react";
import './App.css'
import Entries from "./components/Entries";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import { Route, Routes, useLocation } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, gql, useMutation } from '@apollo/client'
import LoginPage from "./components/Login";
import SignIn from './components/SignIn'


const graphQLServerUrl = 'https://my-journal.scdorsey22.workers.dev/'

const client = new ApolloClient({
  uri: graphQLServerUrl,
  cache: new InMemoryCache()
})


function App() {
  const location = useLocation()
  return (
    <ApolloProvider client={client}>
    {location.pathname !== "/login" && location.pathname !== "sign-in" && <Header />}
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="/" element={<EntryForm />}></Route>
        <Route path="/entries" element={<Entries />}></Route>
      </Routes>
    </ApolloProvider>
  )
}

export default App
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

// const GET_ENTRIES = gql`
//   {
//     entries {
//       id
//       text
//     }
//   }
// `


// function AddEntry() {
//   let input
//   const [createEntry] = useMutation(gql`
//   mutation CreateEntry($text: String!) {
//     createEntry(text: $text) {
//       id 
//       text
//     }
//   }
//   `,
//   {
//     update(
//       cache,
//       {
//         data: { createEntry },
//       },
//     ) {
//       const { entries } = cache.readQuery({ query: GET_ENTRIES })
//       cache.writeQuery({
//         query: GET_ENTRIES,
//         data: {entries: [createEntry].concat(entries)}
//       })
//     }
//   }
  
//   )
// return (
//   <div>
//     <form onSubmit={e => {
//       e.preventDefault()
//       createEntry({ variables: { text: input.value } })
//       input.value = ''
//     }}
//     >
//       <input
//       ref={node => {
//         input = node
//       }}
//       />
//       <button type="submit">Add Entry</button>
//     </form>
//   </div>
// )

// }

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
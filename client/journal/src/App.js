import React from "react";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, useQuery, gql, useMutation } from '@apollo/client'


const graphQLServerUrl = 'https://my-journal.scdorsey22.workers.dev/'

const client = new ApolloClient({
  uri: graphQLServerUrl,
  cache: new InMemoryCache()
})

const GET_ENTRIES = gql`
  {
    entries {
      id
      text
    }
  }
`

const Entries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES)


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.entries.map(({ text }) => (
        <h3>{text}</h3>
      ))}
    </div>
  )
}

function AddEntry() {
  let input
  const [createEntry] = useMutation(gql`
  mutation CreateEntry($text: String!) {
    createEntry(text: $text) {
      id 
      text
    }
  }
  `,
  {
    update(
      cache,
      {
        data: { createEntry },
      },
    ) {
      const { entries } = cache.readQuery({ query: GET_ENTRIES })
      cache.writeQuery({
        query: GET_ENTRIES,
        data: {entries: [createEntry].concat(entries)}
      })
    }
  }
  
  )
return (
  <div>
    <form onSubmit={e => {
      e.preventDefault()
      createEntry({ variables: { text: input.value } })
      input.value = ''
    }}
    >
      <input
      ref={node => {
        input = node
      }}
      />
      <button type="submit">Add Entry</button>
    </form>
  </div>
)

}

function App() {
  return (
    <ApolloProvider client={client}>
      <Entries />
      <AddEntry />
    </ApolloProvider>
  )
}

export default App
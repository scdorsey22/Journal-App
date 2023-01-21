import React from "react";
import { useQuery, gql, } from '@apollo/client'

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
      <div>
      {data.entries.map(({ text }) => (
        <div>
          <h3>{text}</h3>
          <button>X</button>
        </div>
      ) 
      )}
      </div>
    </div>
  
  )
}

export default Entries
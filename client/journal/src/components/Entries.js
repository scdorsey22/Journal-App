import React from "react";
import { useQuery, gql, } from '@apollo/client'
import { Paper, Container, Typography, Box, Button } from "@mui/material";
import { Grid, TextField, Card } from "@mui/material";

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
    <Container component="main" maxWidth="sm" sx={{ mb: 10 }}>
      <Paper variant="standard" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Box>
      {data.entries.map(({ text }) => (
        <Card>
          <Typography>{text}</Typography>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Card>
      ) 
      )}
      </Box>
      </Paper>
    </Container>
  
  )
}

export default Entries
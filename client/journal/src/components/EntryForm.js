import React from "react";
import { gql, useMutation } from '@apollo/client'
import { Paper, Container, Typography, Box, Button } from "@mui/material";
import { Grid, TextField } from "@mui/material";

const GET_ENTRIES = gql`
  {
    entries {
      id
      text
    }
  }
`
export default function EntryForm() {

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
  })

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 10 }}>
            <Paper variant="standard" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                 <Typography component="h1" variant="h4" align="center" padding={2}>
                Journal Entry
                </Typography>
                <Box component="form" onSubmit={e => {
                e.preventDefault()
                createEntry({ variables: { text: input.value } })
                input.value = ''
                }}>
            <React.Fragment>
                 <Grid container spacing={1}>
                    <TextField
                    required
                    id="input"
                    name="input"
                    label="Write your thoughts here..."
                    autoComplete="given-name"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={16}
                    ref={node => {
                        input = node
                      }}
                    /> 
                </Grid>
            </React.Fragment>
            <React.Fragment>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    >Enter
                    </Button>
                </Box>
            </React.Fragment>
            </Box>
            </Paper>
        </Container>
    )}
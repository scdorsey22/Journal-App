import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
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

const JournalEntryArea = styled.textarea`
  font-family: sans-serif;
  flex-grow: 0.85;
  color: ${(props) => props.theme.colors.primary};
  caret-color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  line-height: 1.5;
  letter-spacing: 0.5px;
  height: calc(100vh - 300px);
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  ${'' /* font-size: ${SIZES.small}; */}
  border-radius: 1px;
  ${'' /* margin-top: ${SIZES.tiny}; */}
  padding-top: 0px;
  padding-bottom: 0px;
  &::placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }
  &::selection {
    background: ${(props) => props.theme.colors.hover};
  }
  &:focus {
    box-shadow: 0 0 0 8px ${(props) => props.theme.colors.bodyBackground},
      0 0 0 10px ${(props) => props.theme.colors.hover};
  }
`


export default function EntryForm( { entries }) {

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
      
        <Container component="main" maxWidth="sm" sx={{ mb: 10 }}>
            <Paper variant="standard" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <form onSubmit={e => {
                e.preventDefault()
                createEntry({ variables: { text: e.target.text.value } })
                }}>
                <Box>
            <React.Fragment>
                 <Grid container spacing={1}>
                    <TextField
                    name="text"
                    label="Write your thoughts here..."
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={16}
        
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
            </form>
            </Paper>
         
        </Container>
    
    )}
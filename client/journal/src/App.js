import React from "react";

import { ApolloClient, } from "apollo-boost";
import { gql, useQuery } from "apollo-boost";



const client = new ApolloClient({

})

const Entires = () => {
  const { loading, error, data} = useQuery()
}
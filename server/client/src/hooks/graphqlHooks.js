import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import React from 'react';

export default function UseGQL() {
    const [GQL, setGQL] = React.useState(null)
    const [GQL_ERROR, setGQL_ERROR] = React.useState(false)
  
    React.useEffect(() => {
      const errorLink = onError(({graphqlErrors, networkError}) => {
        if ( graphqlErrors ) {
          graphqlErrors.map((message, location, path) => {
            console.log(`GQL ERROR: ${message} AT LOCATION: ${location} AT PATH ${path}`)
          })
        }
      })
      
      const link = from([
        errorLink,
        new HttpLink({uri: 'http://localhost:5000/graphql'}),
      ]);
      
      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: link
      })
  
      setGQL({ client: client })
    },[])

    return [GQL, GQL_ERROR]
}

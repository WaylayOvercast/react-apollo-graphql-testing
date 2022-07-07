import './App.css';
import axios from 'axios';
import React from 'react';
import { useQuery, gql, ApolloProvider } from "@apollo/client";
import UseGQL from './hooks/graphqlHooks';
import { fetchFeed } from './graphql/queries';

function App() {
  const [feed, setFeed] = React.useState(null)
  const [GQL, GQL_ERROR] = UseGQL()
  const {error, loading, data} = useQuery(fetchFeed)// need to figure out the client side lol

  React.useEffect(() => {console.log(data)},[data])

  React.useEffect(() => {
  
  },[])


  return (
    <ApolloProvider client={GQL.client}>
      <div className="App">
        
      </div>
    </ApolloProvider>
  );
}

export default App;

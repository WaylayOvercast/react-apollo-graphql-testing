import React, { useEffect } from "react";
import { useQuery, gql } from '@apollo/client';
import { fetchFeed } from '../graphql/queries';

export default function Feed () {
    const [feed, setFeed] = React.useState(null)
    const [animatedLoading, setLoadingAnimation] = React.useState()
    const [errorState, setErrorState] = React.useState()
    const { loading, error, data } = useQuery(fetchFeed)

    React.useEffect(() => {
        if ( loading )  {
            setLoadingAnimation(true)
        } else {
            setLoadingAnimation(false)
        }
        if ( error ) {
            setErrorState(true)
        } else {
            setErrorState(false)
        }
    },[loading, error])

    useEffect(() => {console.log(`DATA: ${data}`)}, [data])
    return (
        <div>
            <p>feed goes here.</p>
        </div>
    )   
}
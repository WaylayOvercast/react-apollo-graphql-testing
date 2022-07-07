import { gql } from '@apollo/client';

export const fetchFeed = gql`
    query {
        feed {
            title
            content
            id
        }
    }
`


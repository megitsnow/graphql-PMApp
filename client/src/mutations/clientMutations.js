import { gql } from '@apollo/client'

const ADD_ClIENT = gql`
    mutation addClient($name: String!, $email: String!,
        $phone: String!) {
        addClient(name: $name, email: $email, phone: $phone) {
            id
            name
            email
            phone
        }
    }
`;

const DELETE_ClIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id) {
            id
            name
            email
            phone
        }
    }
`;

export {ADD_ClIENT, DELETE_ClIENT};
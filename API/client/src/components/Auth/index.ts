import {gql} from "@apollo/client";
export const Mutation = {
    loginMutation:gql`
        mutation Mutation($email: String!, $password: String!) {
            login(email: $email, password: $password)
        }
    `,
    registerMutation:gql`
        mutation Mutation($email: String!, $password: String!) {
            register(email: $email, password: $password)
        }
    `

};
export const Query = {

};

export {Login} from './Auth';

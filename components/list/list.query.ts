import {gql} from "@apollo/client";

export const GET_LIST = gql`
    query GetList{
        applicantIndividualCompanyPositions {
            data {
                id
                name
            }
        }
    }
`;


 export const ADD_LIST = gql`
    mutation addList($first_name:String!,$last_name: String!,$email: EMAIL!, $phone: String!,$company_id: ID! ){
        createApplicantIndividual(first_name:$first_name, last_name:$last_name, email:$email, phone:$phone, company_id:$company_id){
            first_name
            id
        }
    }
`;


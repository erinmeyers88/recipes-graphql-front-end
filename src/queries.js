import gql from "graphql-tag";

export const CATEGORIES_QUERY = gql`
    query categories{
        Categories {
            name
            id
            recipes {
                title
                ingredients
                instructions
                id
                categoryId
            }
        }
    }
`;
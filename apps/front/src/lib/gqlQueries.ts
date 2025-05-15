import gql from "graphql-tag"

export const GET_PRODUCTS = gql`
query products($skip: Float, $take: Float, $category: String) {
    products(skip: $skip, take: $take, category: $category) {
        id
        name
        description
        price
        stock
        category {
            name
        }
    }
    productCount(category: $category)
}
`

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: Int!) {
    getProductById(id: $id) {
        id
        name
        description
        price
        stock
        category {
            name
        }
     }
  }
`;

export const CREATE_USER_MUTATION = gql`
    mutation createUser($input: CreateUserInput!) {
        createUser(createUserInput: $input) {
            id
        }
    }
`

export const SIGN_IN_MUTATION = gql`
  mutation signIn($input: SignInInput!) {
    signIn(signInInput: $input) {
      id
      firstName
      lastName
      accessToken
    }
  }
`;

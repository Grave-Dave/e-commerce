import gql from "graphql-tag"

export const GET_PRODUCTS = gql`
query products($skip: Float, $take: Float) {
    products(skip: $skip, take: $take) {
        id
        name
        description
        price
        stock
        category {
            name
        }
    }
    productCount
}
`

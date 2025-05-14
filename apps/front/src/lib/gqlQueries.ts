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

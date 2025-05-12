
export const fetchGraphQL = async (query: string, variables = {}) => {

    const response = await fetch(`https://e-commerce-be-plc7.onrender.com/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    const result = await response.json()
    if (result.errors) {
        console.log("GraphQL errors:", result.errors)
        throw new Error("Failed to fetch data from GraphQL")
    }

    return result.data
}

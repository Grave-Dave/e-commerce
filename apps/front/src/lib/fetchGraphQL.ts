
export const fetchGraphQL = async (query: string, variables = {}) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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

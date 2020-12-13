exports.graphQLQuery = `#graphql
query ($user: String!) {
  user(login: $user) {
    repositories (last:100){
      edges {
        node {
          name
          description
          url
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
          pushedAt
          languages (last:100) {
            edges {
              node {
                color
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
`
exports.variables = {
  user: "Doemuu",
}

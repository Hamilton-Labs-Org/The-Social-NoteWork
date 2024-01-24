import { gql } from "@apollo/client";

const SIGNIN_USER = gql`
mutation signIn($email: String, $password: String!) {
        signIn(email: $email, password: $password)
      }
`;

const EDIT_NOTE = gql`
mutation updateNote($id: ID!, $content: String!) {
        updateNote(id: $id, content: $content) {
					id
          content
          createdAt
          favoriteCount
          favoritedBy {
id
username 
}
          author {
            username
id 
}
} 
}
`;

const DELETE_NOTE = gql` mutation deleteNote($id: ID!) {
        deleteNote(id: $id)
      }
`;

// add the TOGGLE_FAVORITE mutation
const TOGGLE_FAVORITE = gql` mutation toggleFavorite($id: ID!) {
        toggleFavorite(id: $id) {
          id
					favoriteCount
        }
} 
`;

export { SIGNIN_USER, EDIT_NOTE, DELETE_NOTE, TOGGLE_FAVORITE };

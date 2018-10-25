import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import Recipe from './Recipe';
import {CATEGORIES_QUERY} from "./queries";

const DELETE_RECIPE_MUTATION = gql`
    mutation DeleteRecipe($id: ID!){
        RemoveRecipe(id: $id){
            id
        }
    }
`;

const DeleteRecipe = ({recipe, close, clearRecipe}) => {
  return <Mutation
    mutation={DELETE_RECIPE_MUTATION}
    onCompleted={() => {
      close();
      clearRecipe();
    }}
    refetchQueries={[{query: CATEGORIES_QUERY}]}
  >
    {
      (deleteRecipe, {data}) => (
        <Modal open>
          <Modal.Header>Delete Recipe</Modal.Header>
          <Modal.Content>
            Are you sure you want to delete this recipe?
          </Modal.Content>
          <Modal.Content>
            <Recipe recipe={recipe} hideDelete hideEdit/>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={close}>Cancel</Button>
            <Button onClick={() => deleteRecipe({
              variables: {id: recipe.id}
            })}>Delete</Button>
          </Modal.Actions>
        </Modal>
      )
    }
  </Mutation>
};

export default DeleteRecipe;

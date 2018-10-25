import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import RecipeForm from './RecipeForm';
import {CATEGORIES_QUERY} from "./queries";

const EDIT_RECIPE_MUTATION = gql`
    mutation EditRecipe($id: String!, $title: String!, $ingredients: String!, $instructions: String!, $categoryId: String!) {
        UpdateRecipe(id: $id, data: {title: $title, ingredients: $ingredients, instructions: $instructions, categoryId: $categoryId}) {
            title,
            ingredients,
            instructions
        }
    }
`;

const EditRecipe = ({form, close, updateForm, categories, clearRecipe}) => {

  const options = [];

  categories.map(cat => options.push({text: cat.name, value: cat.id, key: cat.id}));

  return <Mutation
    mutation={EDIT_RECIPE_MUTATION}
    onCompleted={() => {
      close();
      clearRecipe();
    }}
    refetchQueries={[{query: CATEGORIES_QUERY}]}
  >
    {
      (editRecipe, {data}) => (
        <RecipeForm
          title={'Edit'}
          saveRecipe={editRecipe}
          updateForm={updateForm}
          categories={categories}
          form={form}
          close={close}
          clearRecipe={clearRecipe}
        />

      )
    }
  </Mutation>
};

export default EditRecipe;
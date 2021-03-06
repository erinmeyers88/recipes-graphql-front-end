import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import RecipeForm from './RecipeForm';
import {CATEGORIES_QUERY} from "./queries";

const ADD_RECIPE_MUTATION = gql`
    mutation AddRecipe($title: String!, $ingredients: String!, $instructions: String!, $categoryId: String!) {
        AddRecipe(data: {title: $title, ingredients: $ingredients, instructions: $instructions, categoryId: $categoryId}) {
            title,
            ingredients,
            instructions
        }
    }
`;

const AddRecipe = ({form, close, updateForm, categories, clearRecipe}) => {

  const options = [];

  categories.map(cat => options.push({text: cat.name, value: cat.id, key: cat.id}));

  return <Mutation
    mutation={ADD_RECIPE_MUTATION}
    onCompleted={() => {
      close();
      clearRecipe();
    }}
    refetchQueries={[{query: CATEGORIES_QUERY}]}
  >
    {
      (addRecipe, {data}) => (
        <RecipeForm
          title={'Add'}
          saveRecipe={addRecipe}
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

export default AddRecipe;
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

const AddRecipe = ({form, closeForm, updateForm, categories}) => {

  const options = [];

  categories.map(cat => options.push({text: cat.name, value: cat.id, key: cat.id}));

  return <Mutation
    mutation={ADD_RECIPE_MUTATION}
    onCompleted={closeForm}
    refetchQueries={[{query: CATEGORIES_QUERY}]}
  >
    {
      (addRecipe, {data}) => (
        <RecipeForm
          addRecipe={addRecipe}
          updateForm={updateForm}
          categories={categories}
          form={form}
          closeForm={closeForm}/>
      )
    }
  </Mutation>
};

export default AddRecipe;
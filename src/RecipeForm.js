import React from 'react';
import {Form, Button, Modal} from 'semantic-ui-react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const ADD_RECIPE_MUTATION = gql`
    mutation AddRecipe($title: String!, $ingredients: String!, $instructions: String!, $categoryId: String!) {
        AddRecipe(data: {title: $title, ingredients: $ingredients, instructions: $instructions, categoryId: $categoryId}) {
            title,
            ingredients,
            instructions
        }
    }
`;

const RecipeForm = ({form, open, closeForm, updateForm, categories}) => {

  const options = [];

  categories.map(cat => options.push({text: cat.name, value: cat.id, key: cat.id}));

  return <Mutation mutation={ADD_RECIPE_MUTATION}>
    {
      (addRecipe, {data}) => (
        <Modal open={open}>
          <Modal.Header>Recipe</Modal.Header>
          <Modal.Content>
            <Form style={{height: '100%'}}>
              <Form.Input name="title" value={form.title} label="Title" onChange={(e, data) => updateForm(data)}/>
              <Form.Input name="ingredients" value={form.ingredients} label="Ingredients"
                          onChange={(e, data) => updateForm(data)}/>
              <Form.Input name="instructions" value={form.instructions} label="Instructions"
                          onChange={(e, data) => updateForm(data)}/>
              <Form.Select name="categoryId" value={form.categoryId} options={options} label="Category"
                           onChange={(e, data) => updateForm(data)}/>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={closeForm}>Cancel</Button>
            <Button onClick={() => addRecipe({
              variables: {...form}
            })}>Submit</Button>
          </Modal.Actions>
        </Modal>
      )
    }
  </Mutation>
};

export default RecipeForm;

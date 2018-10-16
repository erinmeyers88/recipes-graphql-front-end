import React from 'react';
import {Form, Button, Modal} from 'semantic-ui-react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const RecipeForm = ({form, categories, saveRecipe, open, closeForm, updateForm}) => <Query fetchPolicy="no-cache" query={gql`
{
Categories {
    name
    id
}
}
`}>{({loading, error, data}) => {

  let categories = [];
  if (data.Categories && !loading) {
    data.Categories.map(cat => categories.push({text: cat.name, value: cat.id, key: cat.id}));
  }
  
  return <Modal open={open}>
    <Modal.Header>Recipe</Modal.Header>
    <Modal.Content>
      <Form style={{height: '100%'}}>
        <Form.Input name="title" value={form.title} label="Title" onChange={(e, data) => console.log('data', data)}/>
        <Form.Input name="ingredients" value={form.ingredients} label="Ingredients" onChange={(e, data) => console.log('data', data)}/>
        <Form.Input name="instructions" value={form.instructions} label="Instructions" onChange={(e, data) => console.log('data', data)}/>
        <Form.Select name="category" value={form.category} options={categories} label="Category" onChange={(e, data) => console.log('data', data)}/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={closeForm}>Cancel</Button>
      <Button onClick={saveRecipe}>Submit</Button>
    </Modal.Actions>
  </Modal>
}}

</Query>;

export default RecipeForm;

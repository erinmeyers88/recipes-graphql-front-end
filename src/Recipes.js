import React from 'react';
import Recipe from './Recipe';
import {Card} from 'semantic-ui-react';

const Recipes = ({recipes, openDeleteRecipeModal, selectRecipe, openEditRecipeModal}) => <Card.Group>{recipes.map((recipe, key) => <Recipe
  key={key}
  recipe={recipe}
  openDelete={openDeleteRecipeModal}
  openEdit={openEditRecipeModal}
  selectRecipe={selectRecipe}
/>)}</Card.Group>;

export default Recipes;


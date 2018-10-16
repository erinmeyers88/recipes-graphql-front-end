import React from 'react';
import Recipe from './Recipe';
import {Card} from 'semantic-ui-react';

const Recipes = ({recipes}) => <Card.Group>{recipes.map((recipe, key) => <Recipe key={key} {...recipe}/>)}</Card.Group>;

export default Recipes;


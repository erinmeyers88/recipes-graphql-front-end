import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Tab} from 'semantic-ui-react';
import Recipes from './Recipes';

const Categories = () => (
  <Query query={gql`
  {
Categories {
    name
    recipes {
        title
        ingredients
        instructions
}
}
  }
  `}>
    {({loading, error, data}) => {
      if (!loading && data) {

        const panes = [];

        data.Categories.map(category => panes.push({
          menuItem: category.name,
          render: () => <Tab.Pane><Recipes recipes={category.recipes}/></Tab.Pane>
        }));

        return <Tab panes={panes}/>
      } else {
        return <div>hi</div>
      }
    }}
  </Query>
);

export default Categories;


import React, {Component} from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Tab} from 'semantic-ui-react';
import Recipes from './Recipes';


class Categories extends Component {



  selectRecipe(recipe) {
    this.setState({
      recipe
    });
  }


  render() {
    return <Query query={gql`
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
            render: () => <Tab.Pane style={{height: 400, overflowY: 'auto'}}>
              <Recipes recipes={category.recipes}/>
            </Tab.Pane>
          }));

          return <Tab panes={panes} style={{width: 700}}/>
        } else {
          return <div>hi</div>
        }
      }}
    </Query>;
  }
}


export default Categories;


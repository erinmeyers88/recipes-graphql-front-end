import React, {Component} from 'react';
import Categories from './Categories';
import {Button, Header, Icon, Sidebar, Segment, Menu} from "semantic-ui-react";
import RecipeForm from './RecipeForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        title: '',
        ingredients: '',
        instructions: '',
        categoryId: null
      },
      formShown: false,
      sidebarShown: false
    };
  }

  showForm() {
    this.setState({formShown: true});
  }

  hideForm() {
    this.setState({formShown: false});
  }

  hideSidebar() {
    this.setState({sidebarShown: false});
  }

  showSidebar() {
    this.setState({sidebarShown: true});
  }

  updateForm({name, value}) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.hideSidebar.bind(this)}
            vertical
            visible={this.state.sidebarShown}
            width='thin'
          >
            <Menu.Item onClick={this.showForm.bind(this)}>
              <Icon name='plus'/>
              Add Recipe
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Button onClick={this.showSidebar.bind(this)} icon="bars"/>
              <Header as='h2' icon textAlign='center'>
                <Icon name='folder'/>
                Recipes
                <Header.Subheader>Save different categories of recipes.</Header.Subheader>
              </Header>
              <div style={{display: 'flex', justifyContent: 'center', padding: 50}}>
                <Categories/>
              </div>
              <RecipeForm closeForm={this.hideForm.bind(this)} open={this.state.formShown} form={this.state.recipe} updateForm={this.updateForm.bind(this)}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;

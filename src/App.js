import React, {Component} from 'react';
import {Icon, Sidebar, Menu} from "semantic-ui-react";
import RecipesContainer from './RecipesContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    console.log('render app');
    return (
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
        <RecipesContainer
          showSidebar={this.showSidebar.bind(this)}
          hideForm={this.hideForm.bind(this)}
          formShown={this.state.formShown}
        />
      </Sidebar.Pushable>
    );
  }
}

export default App;

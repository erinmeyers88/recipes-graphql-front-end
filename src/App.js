import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './Recipes';
import Categories from './Categories';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Categories/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Layout from './components/Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    return (
      <Layout>
        {this.props.children}
      </Layout>
    );

  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Portfolio from './containers/Portfolio';
import Blog from './containers/Blog';
import Resume from './containers/Resume';

import './App.css';

export default class App extends Component {

  state = {

  }

  render() {

    let content = (
      <>
        <Route exact path = '/' component = { Portfolio } />

        <Route path = '/blog' component = { Blog } />

        <Route path = '/resume' component = { Resume } />
      </>
    )

    return (
      <BrowserRouter>
        <div className = 'App'>
          { content }
        </div>
      </BrowserRouter>
    )
  }
}
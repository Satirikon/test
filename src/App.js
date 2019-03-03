/*
написать роутер
*/
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './main/form/unused/Form';


class App extends Component {
  render() {
    return (
<Router>

          <div className="App">
              <Route path="/test" component={Form}/>
            <Header/>
            <Main/>
            <Footer/>

          </div>
</Router>

    );
  }
}

export default App;

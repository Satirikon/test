import React, { Component } from 'react';
import './main.scss';
import AppMenu from "./appMenu/AppMenu";
import Categories from "./categories/Categories";
import FormTry from './form/Formik';
class Main extends Component {


  render() {


    return (
        <div className="main">
           <AppMenu/>
        <Categories/>
            <FormTry />
        </div>
    );
  }

}

export default Main;

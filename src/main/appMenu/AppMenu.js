/*
привязать адд к открытию формы
*/
import React, { Component } from 'react';
import './appMenu.scss';
import add from '../../assets/add.svg';
import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg'
import { Link } from 'react-router-dom';

class AppMenu extends Component {
    render() {
        return (
            <div>
            <div>
              <button className="action-button" onClick={<Link to="/test" />}>
                <img className="icon" src={add} alt='Error'/>

              </button>
              <p>Add</p>
            </div>,
            <div>
              <button className="action-button">
                <img className="icon" src={edit} alt='Error'/>
              </button>
              <p>Edit</p>
            </div>,
            <div>
              <button className="action-button">
                <img className="icon" src={remove} alt='Error'/>
              </button>
                <p>Remove</p>
            </div>
                </div>
        );

    }
}
export default AppMenu;

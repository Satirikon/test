/*при нажатии сабмит линк обратно на главную
 добавление в список элементов категории
 проброс категории из Categories

*/
import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', text: '', tags:'', errorTitle: '', errorText: '',
            errorTags: ''
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event){
        this.setState({title: event.target.value});
    }

    onTextChange(e) {
        this.setState({text: e.target.value});
    }
    onTagsChange(e) {
        this.setState({tags: e.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        alert('Success');

    }


    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <p><label> Title: <input
                    type="text"
                    name="title"
                    value={this.state.title}
                onChange={this.onTitleChange}
                /></label></p>

                <p><label> Description: <textarea type="text" name="text" value={this.state.text}
                onChange={this.onTextChange}/></label></p>

                <p><label> Tags: <textarea type="text" name="tags" value={this.state.tags}
                onChange={this.onTagsChange}/></label></p>

                <p><input type="submit" value="Submit" /></p>
            </form>
        );
    }

}

export default Form;
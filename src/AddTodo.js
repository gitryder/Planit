import React, {Component} from 'react'

class AddTodo extends Component {
    state = {
        id: 0,
        content: ''
    }

    handleInputChange = (e) => {
        this.setState({
            id: Math.random(),
            content: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="add new todo" onChange={this.handleInputChange} value={this.state.content}/>
            </form>
        )
    }
}

export default AddTodo
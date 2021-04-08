import React, {Component} from 'react';

class AddForm extends Component {
    state={
        content: ''
    }
    handleChenge=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Add new ToDo:</label>
                    <input type="text" onChange={this.handleChenge} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddForm
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    
 getStyle = () =>{
     return{ textDecoration: this.props.todo.completed ? 
        'line-through' : 'none',
       
     }
 }


    render() {
        //destructuring
        const {id,title} =this.props.todo;
        
        return (
            <div className="todoitem" style={this.getStyle()}>
           
            <p>  <input type="checkBox" onChange={this.props.markComplete.bind(this, id)}/> {" "}
            {title}
            <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
            </p> 
            </div>
        )
    }
}


//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background:"#ff0000",
    color: "#fff",
    border:'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right',
    padding:' 5px 7px 0px',
    textAling: 'center'
    
}
export default TodoItem;

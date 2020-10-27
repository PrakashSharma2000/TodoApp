import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './Components/Todos';
import Header from './Layout/Header';
import AddTodo from './Components/AddTodo';
import {v4 as uuid} from 'uuid';
import './App.css';
import About from './Components/Pages/About';


class App extends Component {
  state = {
    todos: [

    ]
  }

  //Toggel commplete
  markComplete = (id) =>{
    console.log(id)
    this.setState({
      todos: this.state.todos.map(
        todo => {
          if(todo.id===id){
            todo.completed= !todo.completed
          }
          return todo;
        }
      )
    })
  }

  //deleteitem
  delTodo = (id)=>{
   this.setState({ todos: [...this.state.todos.filter(todo => 
    todo.id!==id)]})
  }

  //AddTodo
  addTodo =(title)=>{
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
}

  render() {

    return (
      
      <Router>
      <div>
      <div class="container">
        <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
          markComplete ={this.markComplete}
          delTodo={this.delTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
          
      </div>
      </div>
      </Router>
      
      
    )
  }
}
export default App;

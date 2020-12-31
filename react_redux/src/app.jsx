import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import styling from './components/display.css';



function App() {
    return (
        <div className={styling.app} >
            <header><Link to={"/"}>Home</Link></header>
            <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route exact path="/todos">
               <TodoList />
           </Route>
           <Route exact path="/todos/new/" component={props=> <AddTodo {...props} />} />
           <Route path="/todos/new/:edit" component={props=> <AddTodo {...props}/>} />
           <Route component={()=> <Redirect to={'/todos'}/>}/>
           </Switch>
        </div>
    )
}

export default App;

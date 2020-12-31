import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import UserColors from './components/UserColors.jsx';
import AddColor from './components/AddColor.jsx';
import DisplayColor from './components/DisplayColor.jsx';
import styling from './components/display.css';



function App() {
    return (
        <div className={styling.app} >
            <header><Link to={"/"}>Home</Link></header>
            <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route exact path="/colors">
               <UserColors />
           </Route>
           <Route exact path="/colors/new">
               <AddColor />
           </Route>
           <Route path="/colors/:color">
               <DisplayColor />
           </Route>
           <Route component={()=> <Redirect to={'/colors'}/>}/>
           </Switch>
        </div>
    )
}

export default App;

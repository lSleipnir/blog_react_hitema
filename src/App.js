import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; // pour création system de routing
import Home from "./views/Home";
import Header from "./components/Header";
import PostsList from "./views/Posts/PostsList";
import PostAdd from "./views/Posts/PostAdd";
import PostDetails from "./views/Posts/PostDetails";
import PostModify from "./views/Posts/PostModify";
import UsersList from "./views/Users/UsersList";
import UserDetails from "./views/Users/UserDetails";
import UserModify from "./views/Users/UserModify";
import UserAdd from "./views/Users/UserAdd";

export default class App extends Component {


  //exact permet de savoir si j'ai exactement ce chemin là 'path' alors charge le composant
  //component qui va être appelé quand on aura ce chemin 'path'
  render() {
    return <BrowserRouter>

      {/*Si on veut qlq chose dans toutes les pages, on va mettre dans le BrowserRouter dans App.js*/}
      {/*HEADER*/}
      <Header/>

      <Switch>

        <Route exact path="/" component={Home}/>

        <Route exact path="/articles" component={PostsList}/>
        <Route exact path="/articles/ajouter" component={PostAdd}/>
        <Route exact path="/articles/:id" component={PostDetails}/>
        <Route exact path="/articles/:id/modifier" component={PostModify}/>

        <Route exact path="/users" component={UsersList}/>
        <Route exact path="/users/ajouter" component={UserAdd}/>
        <Route exact path="/users/:id" component={UserDetails}/>
        <Route exact path="/users/:id/modifier" component={UserModify}/>

      </Switch>

    </BrowserRouter>

  }

}


import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Category from "./pages/categories/Categories";
import NewCategory from "./pages/newCategory/NewCategory";
import Navigation from "./components/Navigation/Navigation";
import {AppState} from "./context/app/AppState";
import View from "./pages/view/View";
import Edit from "./pages/edit/Edit";
import Alert from "./components/Alert/Alert";
import {AlertState} from "./context/alert/AlertState";


function App() {


    return (

        <AppState>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <AlertState>
                        <Alert/>
                        <Route exact path='/category' component={Category}/>
                        <Route exact path="/">
                            <Redirect to="/category"/>
                        </Route>
                        <Route exact path='/new' component={NewCategory}/>
                        <Route exact path='/view' component={View}/>
                        <Route exact path='/edit' component={Edit}/>
                    </AlertState>
                </Switch>

            </BrowserRouter>

        </AppState>


    );
}

export default App;

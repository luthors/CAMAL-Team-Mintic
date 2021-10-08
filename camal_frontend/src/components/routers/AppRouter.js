import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { AuthRouter } from './AuthRouter';
import { DashboardScreen } from '../dashboard/DashboardScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ DashboardScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}

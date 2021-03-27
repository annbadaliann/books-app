import React, { useEffect, useState } from "react";
import {
  NavLink,
  useLocation,
  useHistory,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";


import { MuiThemeProvider } from "@material-ui/core";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Auth from './pages/Auth/Auth'

export default function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <CssBaseline />
        {/* <NormalizeStyles /> */}

        <Switch>
          {/* <Route component={Auth} path="/auth" /> */}
          <Route component={Dashboard} path="/dashboard/:page" />
          <Route component={Auth} path="/auth" />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

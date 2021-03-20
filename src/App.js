import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory, BrowserRouter, Route, Switch } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';


import { MuiThemeProvider } from '@material-ui/core';
import Dashboard from './layouts/Dashboard/Dashboard';

export default function App() {
    return (
      <BrowserRouter>
      <MuiThemeProvider>
          <CssBaseline />
          {/* <NormalizeStyles /> */}

              <Switch>
              <Route component={Dashboard} path="/dashboard/:page" />

              </Switch>
      </MuiThemeProvider>
  </BrowserRouter>
    );
}


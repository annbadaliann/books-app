import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import HomeIcon from '@material-ui/icons/Home';

import Books from '../../pages/Books/Books';
import About from '../../pages/About/About';

import useStyles from './style';
import Home from '../../pages/Home/Home';
import NewBook from '../../pages/NewBook/NewBook';
import Contact from '../../pages/Contact/Contact';

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [pathName, setPathname] = useState();

    const routes = [
        {
            path: 'home',
            component: Home,
        },
        {
            path: 'about',
            component: About,
        },
        {
            path: 'contact-us',
            component: Contact,
        },
       
        {
            path: 'books',
            component: Books,
        },
        {
            path: 'new-book',
            component: NewBook,
        },
    ];
    
    const sidebarRoutes = [
        {
            path: 'home',
            component: Home,
            link: 'Home',
            icon: HomeIcon,
        },
        {
            path: 'about',
            component: About,
            link: 'About',
            icon: SpeakerNotesIcon,
        },
        {
            path: 'contact-us',
            component: Books,
            link: 'Contact us',
            icon: PermPhoneMsgIcon,
        },
        {
            path: 'books',
            component: Books,
            link: 'Books',
            icon: MenuBookIcon,
        },
        {
            path: 'new-book',
            component: NewBook,
            link: 'New book',
            icon: PostAddIcon,
        },
    ];

    const logoutHandler = () => {

        // history.push('/login');
    };

    useEffect(() => {
        const pathname = location.pathname.split('/')[2];
        setPathname(pathname);
    }, [location.pathname]);

    return (
        <>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton onClick={logoutHandler}>
                        <ExitToAppIcon className={classes.logoutIcon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List>
                    {sidebarRoutes.map((item) => {
                            return (
                                <ListItem button key={item.path} activeClassName={classes.activeLink} component={NavLink} to={`/dashboard/${item.path}`}>
                                    <item.icon />
                                    <ListItemText className={classes.listItemText}>{item?.link}</ListItemText>
                                </ListItem>
                            );
                    })}
                </List>
            </Drawer>

            <main className={classes.content}>
                {routes.map((item) => {
                        debugger;

                    if (pathName) {
                        if (item.path === pathName) {
                                return <item.component key={item.path} />;
                        }
                    }
                })}
            </main>
           
        </div>
         <footer className={classes.footer}>
         All rights reserved.
     </footer>
    </>
    );
}


import { makeStyles } from "@material-ui/core";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        height: '100%'
    },
    appBar: {
        width: `100%`,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        position: 'static',
        paddingTop: '80px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#f3f3f3',
        padding: theme.spacing(3),
        paddingTop: '100px',
    },
    logoutIcon: {
        color: '#fff',
    },
    listItemText: {
        marginLeft: '10px',
    },
    activeLink: {
        color: theme.palette.primary.main,
    },
    footer: {
        background: '#3f51b5',
        padding: '20px',
        color: "#fff",
        textAlign: 'center'
    }
}));

export default useStyles;
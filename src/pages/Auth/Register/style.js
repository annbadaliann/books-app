import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        maxWidth: '400px',
        width: '100%',
        padding: '20px 20px 30px 20px',
        backgroundColor: '#fff',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 30px 50px #b4cbdf',
        borderRadius: '3px',

        '@media (max-width: 500px)': {
            boxShadow: '0px 30px 50px rgba(0, 0, 0, 0.2)'
        }
    },
}));

export default useStyles;

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        position: 'relative',
        display: 'block',
        width: '100%',
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: '#3f51b5',
        boxShadow:'none',
        height: '45px',
        textTransform: 'unset',
        marginBottom: '0',
        fontSize: '13px',
    
        '&:hover': {
            backgroundColor: '#3f51b5'
        },
    
        '&:focus': {
            backgroundColor: '#3f51b5'
        }
    },
    loader: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
    },
    colorPrimary: {
        color: 'red'
    },
    barColorPrimary: {
        backgroundColor: '#f86a1a'
    },
    barColorSecondary: {
        backgroundColor: '#cccccc'
    },
}));

export default useStyles;

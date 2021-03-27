import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
paper: {
      backgroundColor: '#edeef7',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  card: {
      width: "350px",
      padding: "20px"
  },
  activeTab: {
      color: 'red'
  }
}));

export default useStyles;

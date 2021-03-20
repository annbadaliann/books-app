import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  formWrapper: {
      maxWidth: "500px",
      width: '100%',
      margin: '0 auto'
  },
  img: {
      maxWidth: '450px',
      width: '100%',
      marginLeft: '50px'
  },
  content: {
      display: 'flex',
  }
}));

export default useStyles;

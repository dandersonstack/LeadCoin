import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from 'material-ui/styles';
import Button from './CalculatorButton';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "100%",
  },
});


function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
        <Flexbox></Flexbox>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
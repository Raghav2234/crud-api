import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SimpleExpansionPanel extends Component{
  renderlist = () => 
    this.props.fooditems.map((value, index) => {
      let val = value.split(',')
      let quantity = val[1]
      let itemname = val[0]
      return (
        <React.Fragment key={index}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom align="left">
              {itemname}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom align="right">
              Qty. {quantity}
            </Typography>
          </Grid>
        </React.Fragment>
      )
    })
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="caption" gutterBottom align="right">
              View Orders
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
            {this.renderlist()}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
  );
  }
}



SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
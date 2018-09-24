import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Accordian from './Accordian'
import Button from './Button'


const styles = {
  card: {
    maxWidth: 575,
    border: '1px solid #4842b8',
    margin: 8,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pad: {
    margin: 12,
  },
  bluecolor: {
    color: '#4842b8',
  }
};

function SimpleCard(props) {
  const { classes, info} = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="display1" gutterBottom>
          Order #{info._id.slice(-5,-1)}
        </Typography>
        <Grid container spacing={24}>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom align="left">
                Name:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" gutterBottom align="left">
                {info.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom align="left">
                Phone:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" gutterBottom align="left">
                {info.phone}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom align="left">
                Address:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" gutterBottom align="left">
                {info.address}
              </Typography>
            </Grid>
          </Grid>
      </CardContent>
      <Accordian fooditems={info.items}/>
      <CardActions>
        <Grid
          container
          spacing={16}
          alignItems='center'
          direction="row"
          justify="space-between"
          className={classes.pad}
        >
        <Button accepted={info.accepted} _id={info._id}/>
        <Typography className={classes.bluecolor} variant="body2" gutterBottom align="left">
          Amount: Rs.{info.amount}
        </Typography>
        </Grid>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
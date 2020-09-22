import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TweetEmbed from "react-tweet-embed";
import Typography from "@material-ui/core/Typography";

export default function QuickBitesComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key={"header"} item xs={12} md={4}>
            <Typography className={classes.pageHeader} align="center">
              Compose Quick Bites
            </Typography>
            <Typography className={classes.pageSubheader} align="center">
              Learn more about the core concepts of Jetpack Compose right from
              your Twitter feed!
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid key={"issue1"} item xs={12} md={4}>
            <Typography className={classes.issueTitle} align="center">
              Issue #1: What is declarative UI?
            </Typography>
            <TweetEmbed id="1304904120868823040" />
          </Grid>
          <Grid key={"issue2"} item xs={12} md={4}>
            <Typography className={classes.issueTitle} align="center">
              Issue #2: What is this @Composable thing?
            </Typography>
            <TweetEmbed id="1307528586174160896" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "1%",
    padding: "4%",
  },
  pageHeader: {
    fontSize: 30,
    fontFamily: "Playfair Display",
    marginBottom: "1%",
    color: "#78C257",
  },
  pageSubheader: {
    fontSize: 20,
    fontWeight: "lighter",
    fontFamily: "Roboto",
  },
  issueTitle: {
    fontSize: 20,
    fontFamily: "Playfair Display",
    marginBottom: "2%",
    marginTop: "5%",
    color: "#FFFFFF",
    background: "#81c1eb",
    padding: "5px",
  },
});

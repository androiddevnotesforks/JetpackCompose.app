import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import JetpackComposeAppFooter from "../core/JetpackComposeAppFooter";
import NavigationBar from "../core/NavigationBar";
import PageTitle from "../core/PageTitle";
import React from "react";
import TweetEmbed from "react-tweet-embed";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "@reach/router";

function QuickBitesComponent(props: RouteComponentProps) {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Jetpack Compose Quick Bites</title>
        <meta
          name="description"
          content="Learn Jetpack Compose with easy to consume bites of knowledge!"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://JetpackCompose.app/quick-bites"
        />
        <meta property="twitter:title" content="Jetpack Compose Quick Bites" />
        <meta
          property="twitter:description"
          content="Learn Jetpack Compose with easy to consume bites of knowledge!"
        />
        <meta
          property="twitter:image"
          content="https://jetpackcompose.app/quick_bites.png"
        />
      </Helmet>
      <main>
        <NavigationBar />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Grid container justify="center">
              <Grid key={"header"} item xs={12} md={4}>
                <PageTitle
                  header="Compose Quick Bites"
                  subheader=" Learn more about the core concepts of Jetpack Compose right
                    from your Twitter feed!"
                />
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
            <Grid container justify="center" spacing={2}>
              <Grid key={"issue3"} item xs={12} md={4} justify="center">
                <Typography className={classes.issueTitle} align="center">
                  Issue #3: Why should you care about recomposition?
                </Typography>
                <TweetEmbed id="1310042895546609664" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.footer}>
          <JetpackComposeAppFooter />
        </div>
      </main>
    </>
  );
}

const useStyles = makeStyles({
  issueTitle: {
    fontSize: 25,
    fontFamily: "Nunito Sans",
    marginBottom: "2%",
    marginTop: "5%",
    color: "#222",
  },
  footer: {
    marginTop: "2%",
    height: "20vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
    marginBottom: "0px",
    bottom: "0px",
  },
});

export default QuickBitesComponent;

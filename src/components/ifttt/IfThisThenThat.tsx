import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { IfThisThenThanColumnComponent } from "./IfThisThenThatColumnComponent";
import IfThisThenThatColumnComponentType from "../../models/IfThisThenThatColumnComponentType";
import NavigationBar from "../core/NavigationBar";
import JetpackComposeAppFooter from "../core/JetpackComposeAppFooter";
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import JetpackComposeMetadata from "../../models/JetpackComposeMetadata";

interface IfThisThenThatComponentProps extends RouteComponentProps {
  pageContext?: {
    classicAndroid?: any;
    iftttArray: [any];
  };
}

export default function IfThisThenThatComponent(
  props: IfThisThenThatComponentProps
) {
  const classes = useStyles();
  const [selectedClassicAndroid, setClassicAndroidValue] = useState("");
  function handleChange(newValue: string) {
    setClassicAndroidValue(newValue);
  }

  let classicAndroidVsJetpackComposeMap = new Map<
    string,
    JetpackComposeMetadata
  >();

  if (props.pageContext && props.pageContext.iftttArray) {
    props.pageContext.iftttArray.forEach((element) => {
      classicAndroidVsJetpackComposeMap.set(
        element.classicAndroid,
        new JetpackComposeMetadata(
          element.compose,
          element.exampleUrl,
          element.documentationUrl
        )
      );
    });
  }

  useEffect(() => {
    if (
      (selectedClassicAndroid === undefined || selectedClassicAndroid === "") &&
      props.pageContext?.classicAndroid !== undefined &&
      props.pageContext?.classicAndroid !== "" &&
      classicAndroidVsJetpackComposeMap.get(
        props.pageContext.classicAndroid
      ) !== null
    ) {
      setClassicAndroidValue(props.pageContext.classicAndroid);
    }
  }, [
    selectedClassicAndroid,
    classicAndroidVsJetpackComposeMap,
    props.pageContext,
  ]);

  return (
    <>
      <NavigationBar />
      <div className={classes.root}>
        <Helmet>
          <title>
            What's the equivalent of{" "}
            {props.pageContext?.classicAndroid
              ? props.pageContext.classicAndroid
              : ""}{" "}
            in Jetpack Compose?
          </title>
          <meta
            name="description"
            content="Learn more about using Jetpack Compose in Android. How does Jetpack Compose compare to the existing Android UI Toolkit?"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://JetpackCompose.app/" />
          <meta
            property="twitter:title"
            content="What's the equivalent API in Jetpack Compose?"
          />
          <meta
            property="twitter:description"
            content="Learn more about using Jetpack Compose in Android. How does Jetpack Compose compare to the existing Android UI Toolkit?"
          />
          <meta
            property="twitter:image"
            content="https://jetpackcompose.app/JetpackComposeIfThen_Preview_Image.png"
          />
        </Helmet>
        <main>
          <Grid container className={classes.root}>
            <Grid item xs={12} lg={6} className={classes.firstColumn}>
              <IfThisThenThanColumnComponent
                prefix="If you used..."
                suffix="In Classic Android 🤖💚"
                selectedKey={selectedClassicAndroid}
                map={classicAndroidVsJetpackComposeMap}
                handleChange={handleChange}
                componentType={IfThisThenThatColumnComponentType.KEY}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              lg={6}
              className={classes.secondColumn}
            >
              <IfThisThenThanColumnComponent
                prefix="Then, you could use..."
                suffix="In Jetpack Compose 🚀"
                selectedKey={selectedClassicAndroid}
                map={classicAndroidVsJetpackComposeMap}
                handleChange={handleChange}
                componentType={IfThisThenThatColumnComponentType.VALUE}
              />
            </Grid>
            <Grid item xs={12} className={classes.footer}>
              <JetpackComposeAppFooter />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "0%",
  },
  firstColumn: {
    background: "#FFFFFF",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondColumn: {
    background: "#ccff90",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: "20vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
  },
});

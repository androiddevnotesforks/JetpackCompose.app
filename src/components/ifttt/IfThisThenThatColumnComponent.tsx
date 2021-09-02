import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import IfThisThenThatColumnComponentType from "../../models/IfThisThenThatColumnComponentType";
import JetpackComposeMetadata from "../../models/JetpackComposeMetadata";
import Link from "@material-ui/core/Link";
import { navigate } from "gatsby";
import React, { FunctionComponent, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Theme } from "@material-ui/core";
import { ThemeProvider, ClassNameMap } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IfThisThenThanColumnComponentProps {
  prefix: string;
  suffix: string;
  selectedKey: string;
  map: Map<string, JetpackComposeMetadata>;
  componentType: IfThisThenThatColumnComponentType;
  handleChange: (value: string) => void;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ccff90",
    },
  },
});

export const IfThisThenThanColumnComponent: FunctionComponent<IfThisThenThanColumnComponentProps> =
  (props) => {
    const classes = useStyles();
    const classicAndroid = Array.from(props.map.keys());
    const breakpointUpLg: boolean = useMediaQuery(theme.breakpoints.up("lg"));

    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          className={classes.boxCenter}
        >
          <Box>
            <Typography
              variant="h4"
              align="center"
              className={getTypographyClass(props.componentType, classes)}
            >
              {props.prefix}
            </Typography>
          </Box>
          {props.componentType === IfThisThenThatColumnComponentType.KEY ? (
            <Box className={classes.autocompleteBox}>
              <ThemeProvider theme={theme}>
                <Autocomplete
                  id="combo-box-demo"
                  value={props.selectedKey}
                  options={classicAndroid}
                  classes={{
                    option: classes.dropdownOptions,
                  }}
                  onInputChange={(event, newInputValue) => {
                    props.handleChange(newInputValue);
                    if (
                      (props.selectedKey !== newInputValue &&
                        validSelectedKey(newInputValue, props.map)) ||
                      newInputValue === ""
                    ) {
                      navigate(
                        "/What-is-the-equivalent-of-" +
                          newInputValue +
                          "-in-Jetpack-Compose"
                      );
                    }
                  }}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder="<Type>"
                      InputProps={{
                        ...params.InputProps,
                        classes: {
                          input: classes.inputTextField,
                        },
                      }}
                    />
                  )}
                />
              </ThemeProvider>
            </Box>
          ) : (
            <Box>
              <Typography
                variant="h4"
                align="center"
                className={classes.composableValue}
              >
                {!validSelectedKey(props.selectedKey, props.map) ? (
                  breakpointUpLg ? (
                    <div>
                      <span role="img" aria-label="Pointing in Left Direction">
                        👈
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span role="img" aria-label="Pointing in Up Direction">
                        ☝️
                      </span>
                    </div>
                  )
                ) : (
                  props.map.get(props.selectedKey)?.composableName
                )}
              </Typography>
            </Box>
          )}
          <Box>
            <Typography
              variant="h4"
              align="center"
              className={getTypographyClass(props.componentType, classes)}
            >
              {props.suffix}
            </Typography>
          </Box>

          {props.componentType === IfThisThenThatColumnComponentType.VALUE &&
          validSelectedKey(props.selectedKey, props.map) ? (
            <>
              <Box className={classes.linkSection}>
                <Link
                  variant="overline"
                  className={classes.link}
                  href={props.map.get(props.selectedKey)?.composableGithubLink}
                  target="_blank"
                >
                  {props.map.get(props.selectedKey)?.composableGithubLink === ""
                    ? "⌛ Example coming soon! ⌛"
                    : "🤩 Example to help you get started 🤩"}
                </Link>
              </Box>

              <Box>
                <Link
                  variant="overline"
                  className={classes.link}
                  href={props.map.get(props.selectedKey)?.officialDocsLink}
                  target="_blank"
                >
                  Official Docs
                </Link>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </>
    );
  };

function getTypographyClass(
  componentType: IfThisThenThatColumnComponentType,
  classes: ClassNameMap
) {
  return componentType === IfThisThenThatColumnComponentType.KEY
    ? classes.typographyKey
    : classes.typographyValue;
}

function validSelectedKey(
  key: string,
  map: Map<string, JetpackComposeMetadata>
) {
  return key && key.length !== 0 && map.get(key) !== undefined;
}

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  boxCenter: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typographyKey: {
    fontSize: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    color: "#9e9e9e",
    marginBottom: 100,
    marginTop: 100,
    fontWeight: "bold",
    fontFamily: "Nunito Sans",
  },
  typographyValue: {
    fontSize: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    color: "#558b2f",
    fontWeight: "bolder",
    fontFamily: "Nunito Sans",
  },
  linkSection: {
    marginTop: "10%",
  },
  link: {
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    fontFamily: "Nunito Sans",
    color: "#33691e",
  },
  autocompleteBox: {
    width: "80%",
  },
  inputTextField: {
    fontSize: 70,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    textAlign: "center",
    fontWeight: "bolder",
    fontFamily: "Playfair Display",
  },
  composableValue: {
    fontSize: 70,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
    textAlign: "center",
    fontWeight: "bolder",
    fontFamily: "Playfair Display",
    marginBottom: 100,
    marginTop: 100,
  },
  dropdownOptions: {
    fontSize: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    fontFamily: "Nunito Sans",
  },
}));

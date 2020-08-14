import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./../../src/styles.css";

// to create a special css not coming from css local file
// I just want to use {classes.""} from makeStyles locally of course if prefer to use css local file
const useStyles = makeStyles(() => ({
  form: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "580px;",
  },
  TextField: {
    width: "495px",
  },
  button: {
    marginLeft: "7px",
    height: "6.7ch",
    background: "#F8F8F6",
    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
  },
}));

//in this component will return input form to add and edit item with check if input area is empty or not
export default function InputForm(props) {
  const classes = useStyles();

  return (
    <div className="">
      <div className="row">
        <form className={classes.form}>
          <TextField
            id="custom-css-outlined-input"
            label="Add to-do here"
            variant="outlined"
            color="secondary"
            size="medium"
            className={classes.TextField}
            onChange={props.handleChange}
            value={props.inputText}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={
              props.inputText.length !== 0 || "" ? props.handleSubmit : null
            }
            className={classes.button}
          >
            {props.editItem ? "Edit " : "Add "}
          </Button>
        </form>
      </div>
    </div>
  );
}

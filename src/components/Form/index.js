import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./styles.module.scss";

function Form({ initialValues, onSubmit }) {
  const [title, setTitle] = React.useState(initialValues?.title || "");
  const [desc, setDesc] = React.useState(initialValues?.desc || "");
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    if (!title) {
      setError("Title is required");
    } else onSubmit(title, desc);
  };
  useEffect(() => {
    if (title) setError(null);
  }, [title]);

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Title"
        defaultValue="Todo"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.input}
        style={{ marginTop: "1rem" }}
        error={!!error}
        helperText={error}
      />
      <TextField
        id="filled-multiline-static"
        label="Description"
        multiline
        rows={4}
        defaultValue="Add description"
        fullWidth
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{ marginTop: "1rem" }}
      />
      <Button
        variant="outlined"
        onClick={handleSubmit}
        style={{ marginTop: "1rem" }}
      >
        {initialValues ? "Update Todo" : "Add Todo"}
      </Button>
    </>
  );
}

export default Form;

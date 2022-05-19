import React from "react";
import AppBar from "../AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Form from "../Form";
import { useNavigate } from "react-router-dom";

function AddTodo({ onAddTodo }) {
  let navigate = useNavigate();
  const add = (title, desc) => {
    onAddTodo(title, desc);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <AppBar title="AddTodo" />
      <Container maxWidth="sm">
        <Typography variant="h5">What to do next?</Typography>
        <Form onSubmit={add} />
      </Container>
    </div>
  );
}

export default AddTodo;

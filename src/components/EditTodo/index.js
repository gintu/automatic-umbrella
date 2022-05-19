import React from "react";
import AppBar from "../AppBar";
import Form from "../Form";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";

function EditTodo({ currentTodo, onEditTodo }) {
  const param = useParams();
  let navigate = useNavigate();

  const onEdit = (title, desc) => {
    const updatedTodo = {
      ...currentTodo,
      title,
      desc,
    };
    onEditTodo(updatedTodo, param.id);
    navigate("/", { replace: true });
  };

  return (
    <>
      <AppBar title="Edit Todo" />
      <Container maxWidth="sm">
        <Typography variant="h5">Make changes to your Todo</Typography>
        <Form initialValues={currentTodo} onSubmit={onEdit} />
      </Container>
    </>
  );
}

export default EditTodo;

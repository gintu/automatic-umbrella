import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import AppBar from "../AppBar";
import Todo from "../Todo";
import { useNavigate } from "react-router-dom";
import Dash from "../Dash";

function ListTodos({
  todos,
  onClickEditTodo,
  onClickDeleteTodo,
  onClickCompleteTodo,
}) {
  let navigate = useNavigate();

  const getRemainingTodos = () => {
    return todos.filter((todo) => !todo.isCompleted && !todo.isDeleted);
  };

  const [filtedTodos, setFiltedTodos] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState("all");

  // const activeFilter = useRef("all");
  //deep compare todos
  useEffect(() => {
    if (activeFilter === "all") {
      setFiltedTodos(
        todos.filter((todo) => !todo.isCompleted && !todo.isDeleted)
      );
    } else if (activeFilter === "completed") {
      setFiltedTodos(
        todos.filter((todo) => todo.isCompleted && !todo.isDeleted)
      );
    } else if (activeFilter === "deleted") {
      setFiltedTodos(todos.filter((todo) => todo.isDeleted));
    }
  }, [JSON.stringify(todos), activeFilter]);

  const onClickAddTodo = () => {
    navigate("add");
  };
  const [open, setOpen] = React.useState(null);

  const handleDelete = (id) => {
    setOpen(false);
    onClickDeleteTodo(id);
  };
  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <AppBar
        title="Todo list"
        action={{
          name: "Add Todo",
          dispatch: onClickAddTodo,
        }}
      />
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Dash
          handleFilterClick={handleFilter}
          remainingTodos={getRemainingTodos().length}
          activeFilter={activeFilter}
        />
        {filtedTodos.length > 0 ? (
          filtedTodos.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              desc={todo.desc}
              isCompleted={todo.isCompleted}
              isDeleted={todo.isDeleted}
              onEdit={() => onClickEditTodo(todo.id)}
              onDelete={() => setOpen(todo)}
              onComplete={() => onClickCompleteTodo(todo.id)}
            />
          ))
        ) : (
          <Typography
            variant="overline"
            display="block"
            style={{
              marginTop: "2rem",
            }}
          >
            nothing to show here.{" "}
            {activeFilter === "all" ? "Click add todo to get started" : ""}
          </Typography>
        )}
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this todo?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {open?.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => handleDelete(open?.id)}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ListTodos;

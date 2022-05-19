import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import ListTodos from "./components/ListTodos";

function App() {
  let navigate = useNavigate();

  const [todos, setTodos] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState(null);

  const onAddTodo = (title, desc) => {
    let newTodo = {
      id: nanoid(),
      title,
      desc,
      isCompleted: false,
      isDeleted: false,
      createdOn: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const onClickEditTodo = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    setCurrentTodo(todo);
    navigate(`/edit/${todo.id}`);
  };

  const onEditTodo = (updatedTodo, id) => {
    let todo = todos.find((todo) => todo.id === id);
    let newTodos = [...todos];
    newTodos.splice(todos.indexOf(todo), 1, updatedTodo);
    setTodos(newTodos);
  };

  const onDeleteTodo = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    let newTodos = [...todos];
    newTodos.splice(todos.indexOf(todo), 1, {
      ...todo,
      isDeleted: true,
    });
    setTodos(newTodos);
  };

  const onCompleteTodo = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    let newTodos = [...todos];
    newTodos.splice(todos.indexOf(todo), 1, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ListTodos
              todos={todos}
              currentTodo={currentTodo}
              onClickEditTodo={onClickEditTodo}
              onClickDeleteTodo={onDeleteTodo}
              onClickCompleteTodo={onCompleteTodo}
            />
          }
        />
        <Route path="add" element={<AddTodo onAddTodo={onAddTodo} />} />
        <Route
          path="edit/:id"
          element={
            <EditTodo currentTodo={currentTodo} onEditTodo={onEditTodo} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

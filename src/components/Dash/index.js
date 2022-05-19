import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const getGreeting = () => {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Good morning!";
  } else if (curHr < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

function Dash({ remainingTodos, handleFilterClick, activeFilter }) {
  return (
    <div>
      <Typography variant="h5">{getGreeting()}</Typography>
      {remainingTodos > 0 ? (
        <Typography variant="h6" color="text.secondary">
          You have {remainingTodos} remaining tasks.
        </Typography>
      ) : (
        <Typography variant="h6" color="text.secondary">
          You have caught up with all your tasks
        </Typography>
      )}

      <Stack direction="row" spacing={1} style={{ marginTop: "2rem" }}>
        <Chip
          label="Pending tasks"
          onClick={() => handleFilterClick("all")}
          variant={activeFilter === "all" ? "default" : "outlined"}
          color="primary"
        />

        <Chip
          label="completed"
          variant={activeFilter === "completed" ? "default" : "outlined"}
          onClick={() => handleFilterClick("completed")}
          color="success"
        />
        <Chip
          label="deleted"
          variant={activeFilter === "deleted" ? "default" : "outlined"}
          onClick={() => handleFilterClick("deleted")}
          color="error"
        />
      </Stack>
    </div>
  );
}

export default Dash;

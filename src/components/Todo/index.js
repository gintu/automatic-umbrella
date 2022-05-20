import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function Todo({
  createdOn = new Date(),
  title,
  desc,
  isCompleted,
  isDeleted,
  onDelete,
  onEdit,
  onComplete,
}) {
  return (
    <div>
      <Card
        sx={{ minWidth: 275 }}
        style={{ marginTop: "1rem" }}
        variant="outlined"
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Added on {createdOn.toLocaleDateString("en-US", options)}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            // className={isCompleted ? classes.strike : ""}
          >
            {title}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {desc}
          </Typography>
        </CardContent>

        {!isDeleted && (
          <CardActions>
            <Button size="small" onClick={onComplete} color="success">
              {isCompleted ? "Unmark as Complete" : "Mark as Complete"}
            </Button>
            <div style={{ flex: 1 }}></div>
            <IconButton
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onEdit}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="small"
              edge="start"
              color="error"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
}

export default Todo;

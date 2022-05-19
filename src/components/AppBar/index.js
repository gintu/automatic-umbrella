import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import classes from "./styles.module.scss";

export default function ButtonAppBar({ title, action }) {
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ListAltIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {action && (
            <Button color="inherit" onClick={action.dispatch}>
              {action.name}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

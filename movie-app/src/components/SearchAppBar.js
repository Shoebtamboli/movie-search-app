import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { CssBaseline } from "@mui/material";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "@mui/material";

const SearchAppBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const anchor = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <LocalMoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Movies"></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/search">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(anchor, true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

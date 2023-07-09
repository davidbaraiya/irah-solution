import "./header.css";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const drawerWidth = 250;
const navItems = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "our service",
    path: "/services",
  },
  {
    name: "our team",
    path: "/team",
  },
  {
    name: "career",
    path: "/career",
  },
  {
    name: "blog",
    path: "/blog",
  },
];

function Header(props) {
  // const [stickyHeader, setStickyHeader] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="mobile-menu"
    >
      <Typography
        component="div"
        sx={{ my: 2 }}
        className="mobile-logo-wrapper"
      >
        <Link to={"/"}>
          <img src={logo} alt="logo" loading="lazy" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ name, path }, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={path}>{name}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        className="header"
        // className={stickyHeader ? "header sticky-header" : "header"}
      >
        <Container className="container">
          <Toolbar sx={{ padding: "7px 0 !important" }}>
            <Typography
              component="div"
              sx={{ flexGrow: 1 }}
              className="desk-logo-wrapper"
            >
              <Link to={"/"}>
                <img src={logo} alt="logo" loading="lazy" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems?.map(({ name, path }, i) => (
                <NavLink to={path} className="nav-link" key={i}>
                  <Button
                    sx={{
                      color: "#fff",
                      marginLeft: "12px",
                      padding: "4px 0 !important",
                    }}
                  >
                    {name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;

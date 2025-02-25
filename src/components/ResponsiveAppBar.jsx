import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import PageBorderLine from "./PageBorderLine";

function ResponsiveAppBar() {
  const pages = ["Home", "About", "Skills", "Contact"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    console.log("Menu Opened", event.currentTarget);
    console.log("anchorElUser state:", anchorElUser);
    setAnchorElUser(event.currentTarget);
    console.log("Updated anchorElUser:", anchorElUser);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "purple" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".2rem",
              textDecoration: "none",
              scrollBehavior: "smooth",
              color: "wheat",
              fontSize: "2rem",
            }}
          >
            Portfolio.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <a
                  to={page.toLowerCase()}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  {page}{" "}
                </a>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Portfolio.
          </Typography>
          <Box
            className="navbar"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", mb: "0px", mt: "10px" },
            }}
          >
            {pages.map((page) => (
              <a
                key={page}
                className="nav-link"
                href={`#${page.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#123123",
                  cursor: "pointer",
                  margin: "0 10px 0px 0",
                  border: "2px solid white",
                  borderBottom: "none",
                  padding: "6px",
                  position: "relative",
                  borderRadius: "5px 5px 0 0",
                  backgroundColor: "beige",
                  transition: "all 0.5s ease",
                  fontSize: "0.9rem"
                }}
              >
                {page}
              </a>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, m: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/5.jpg" style={{
                color: "blue", fontWeight: 700
              }}>
                N
              </Avatar>
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ flexGrow: 0 }}>
                <div
                  style={{ width: "300px", textAlign: "center", borderRadius: "2px 2px"}}
                  sx={{ p: 0, m: 0 }}
                >
                  <p>Nagendra Babu sadu</p>
                </div>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <PageBorderLine />
    </AppBar>
  );
}
export default ResponsiveAppBar;

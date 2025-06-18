import React, { useContext } from "react";
import logo from "../../../img/newlogo2.png"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdminSideBar from "../AdminSidebar/AdminSideBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";

function AdminNav() {
  const [isDrawer, setIsDrawer] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawer(true);
  };


  return (
    <>
      <section id="Navbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              backgroundColor: "#fbfcfe",
              borderBottom: "1px solid rgba(229, 231, 235, 1)",
            }}
          >
            <Toolbar>
              <IconButton
                onClick={toggleDrawer}
                size="large"
                edge="start"
                aria-label="menu"
                className="text-black lg:!hidden md:!flex sm:!mr-2"
              >
                <MenuIcon />
              </IconButton>
              <img src={logo} className="h-20 w-20 mr-6" />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "700",
                  fontFamily: "Blinker, sans-serif",
                }}
                className="cursor-default sm:!text-[20px] md:!text-[24px] text-black"
              >
                Admin Dashboard
              </Typography>
              <Dropdown>
                <MenuButton
                  sx={{
                    padding: 0,
                    border: "none",
                    background: "none",
                    minWidth: "auto",
                    "&:hover": { background: "none" },
                  }}
                >
                  <Avatar size="sm" />
                </MenuButton>
                <Menu size="sm" sx={{ backgroundColor: "#fbfcfe" }}>
                  <MenuItem
                    sx={{
                      mt: "0.5rem",
                      fontFamily: "Blinker, sans-serif",
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Toolbar>
          </AppBar>
        </Box>
        <AdminSideBar
          isDrawerOpen={isDrawer}
          onClose={() => setIsDrawer(false)}
        />
      </section>
    </>
  );
}

export default AdminNav;

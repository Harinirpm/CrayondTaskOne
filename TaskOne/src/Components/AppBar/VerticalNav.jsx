import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import GridViewIcon from "@mui/icons-material/GridView";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PortraitIcon from "@mui/icons-material/Portrait";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, ListItemIcon, styled } from "@mui/material";

import logo from "../AppBar/logo1.png";
import bottomImg from "../AppBar/logo2.jpg";

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: active ? "black" : "white",
  backgroundColor: active ? "white" : "#0a3e66",
  marginBottom: "10px",
  borderRadius: "10px",
  padding: "10px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    "& .MuiListItemIcon-root, & .MuiListItemText-root": {
      color: "black",
    },
    borderRadius: "10px",
  },
  boxShadow: active ? "0px 0px 15px rgba(255, 255, 255, 0.6)" : "none",
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme, active }) => ({
  minWidth: "20px",
  color: active ? "black" : "white",
  fontSize: "1.5rem",
}));

function VerticalNav() {
  const [activeIndex, setActiveIndex] = useState(1);

  const navItems = [
    { text: "Dashboard", icon: <GridViewIcon /> },
    { text: "Sales", icon: <AddShoppingCartIcon /> },
    { text: "Orders", icon: <ReceiptIcon /> },
    { text: "Customer", icon: <PortraitIcon /> },
    { text: "Items", icon: <StorefrontIcon /> },
    { text: "Inventory", icon: <AddShoppingCartIcon /> },
    { text: "Alerts", icon: <AddShoppingCartIcon /> },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      flex={1}
      backgroundColor="#1F1F20"
      sx={{
        width: "100px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily:'Roboto',
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "60px", height: "60px" }} />
      </Box>

      <List
        sx={{
          backgroundColor: "#0a3e66",
          color: "white",
          padding: "6px",
        }}
        direction={"row"}
      >
        {navItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <StyledListItemButton
              component="a"
              href="#simple-list"
              disableRipple
              active={activeIndex === index}
              onClick={() => handleButtonClick(index)}
            >
              <StyledListItemIcon active={activeIndex === index}>
                {item.icon}
              </StyledListItemIcon>
              <ListItemText
                variant="p"
                primary={item.text}
                sx={{ textAlign: "center", fontSize: "12px" }}
              />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <img
          src={bottomImg}
          alt="Bottom Image"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
}

export default VerticalNav;

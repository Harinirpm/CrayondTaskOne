import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const StyledIconButton = styled(IconButton)(({ bgcolor, textcolor }) => ({
  backgroundColor: bgcolor || "transparent",
  color: textcolor || "black",
  padding: "10px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: textcolor || "lightgray",
    color: bgcolor || "pink",
  },
  border:"1px solid #edebeb",
  boxShadow:"0px 100px 15px rgba(255, 255, 255, 0.6)"
}));

function CustomIcon({ icon: Icon, bgcolor, textcolor, route, sx = {} }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <StyledIconButton
      onClick={handleClick}
      bgcolor={bgcolor}
      textcolor={textcolor}
      sx={sx}
    >
      <Icon />
    </StyledIconButton>
  );
}

export default CustomIcon;


//     <div>
//       <CustomIcon 
//         icon={HomeIcon} 
//         to="/home"      
//         bgcolor="blue" 
//         textcolor="white" 
//         sx={{ margin: 1 }}
//       />
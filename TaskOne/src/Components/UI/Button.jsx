import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ bgcolor, textcolor }) => ({
  backgroundColor: bgcolor || "pink", 
  color: textcolor || "black",      
  padding: '10px 20px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: textcolor || "black", 
    color: bgcolor || "pink",           
  },
}));


function CustomButton({ 
  text = "Click Me", 
  variant = "contained", 
  bgcolor, 
  textcolor, 
  onClick, 
  startIcon, 
  endIcon ,
  sx={},
}) {
  return (
    <StyledButton
      variant={variant}
      bgcolor={bgcolor}
      textcolor={textcolor}
      onClick={onClick}
      startIcon={startIcon}   
      endIcon={endIcon} 
      sx={sx}     
    >
      {text}
    </StyledButton>
  );
}

export default CustomButton;


{/* <CustomButton 
text="Submit" 
bgcolor="blue" 
textcolor="white" 
onClick={handleClick} 
sx={{ margin: 2, boxShadow: 3 }} 
/> */}

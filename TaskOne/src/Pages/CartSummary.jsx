import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomIcon from "../Components/UI/Icon";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Grid from '@mui/material/Grid2';
import Searchbar from "../Components/UI/Searchbar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '../Components/UI/Table'


function CartSummary() {
  return (
    <Box flex={10} sx={{ padding: 0 }} spacing={10}> 
    <Box sx={{padding:"20px"}}>
      <Box display="flex" flexDirection="row" sx={{padding:"0px"}}>
        <Searchbar />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <CustomIcon
            icon={MenuBookIcon}
            textcolor="blue"
            route="/"
            sx={{ marginRight: 0, border: "1px solid #edebeb" ,}}
          />
        </Box>

          </Box>
        
          <Box sx={{marginBottom:"10px"}}> 
          <Grid container spacing={2} justifyContent="center">
            <Box flex={1} justifyContent={'space-between'} sx={{marginLeft:"20px"}}>
            <Typography variant="h6" component='h2' >Cart Smmary</Typography>
            <Typography variant="p"  sx={{color:"#919090"}}>Order ID: 000001</Typography>
            </Box>
        <Grid item >
          <CustomIcon 
            icon={AccountCircleIcon }
            to="/home"
            bgcolor="blue"
            textcolor="white"
            sx={{ margin: 1, backgroundColor:"white",color:"gray"}}
          />
        </Grid>
        <Grid item>
          <CustomIcon 
         
            icon={ TableRestaurantIcon}
            to="/settings"
            bgcolor="green"
            textcolor="white"
            sx={{ margin: 1 , backgroundColor:"white",color:"gray"}}
          />
        </Grid>
        <Grid item>
          <CustomIcon 
            icon={ MoreVertIcon }
            to="/profile"
            bgcolor="purple"
            textcolor="white"
            sx={{ margin: 1, backgroundColor:"white",color:"gray" }}
          />
        </Grid>
      </Grid>
      </Box>
</Box>

          <Table />
      {/* <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="body2" color="textSecondary">
          Cart is empty
        </Typography>
        <Typography variant="body1">
          Scan barcode or add items from catalog
        </Typography>
      </Box> */}
    </Box>
  );
}

export default CartSummary;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomButton from '../Components/UI/Button'; // Assuming CustomButton is in the same folder
import { colors } from '@mui/material';

function PaymentSummary() {
  return (
    <Box flex={5} sx={{ backgroundColor: '#e0e0e0', padding: 2, maxWidth: '1200px' }}>
      {/* Payment Summary Header */}
      <Typography variant="h6" mb={2}>Payment summary</Typography>
      
      {/* Payment Details */}
      <Box mb={4} justifyContent={"space-between"}>
        <Typography variant='h6' component='h4' sx={{color:"#383737", fontSize:"20px"}}>Sub total: </Typography> <Typography variant='h4'>0.00</Typography>
        <Typography variant='h6'>Taxable amount: </Typography>
        <Typography variant='h6'>Total tax: </Typography>
        <Typography variant="h6">Grand total: SAR 0.00</Typography>
      </Box>
      
      {/* Action Buttons */}
      <Box display="flex" justifyContent="space-between" gap={2}>
        <CustomButton text="Print bill" bgcolor="#007bff" textcolor="white" />
        <CustomButton text="Proceed to payment" bgcolor="#28a745" textcolor="white" />
      </Box>
    </Box>
  );
}

export default PaymentSummary;

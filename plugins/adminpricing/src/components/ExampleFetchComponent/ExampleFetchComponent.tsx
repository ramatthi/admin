import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; 
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export  const ExampleFetchComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        marginLeft: '2px',
      }}
    >
  
    {/* Row of Cards/Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          overflowX: 'auto',
        }}
      >
        {/* Example cards/icons; add as needed */}
        <Card sx={{ flex: '1 1 0px', minWidth: '100px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Typography variant="h6">Flat</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 0px', minWidth: '150px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           
            <Typography variant="h6">slab</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 0px', minWidth: '150px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           
            <Typography variant="h6">dynamic</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 0px', minWidth: '150px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
            <Typography variant="h6">intercity</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: '1 1 0px', minWidth: '150px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           
            <Typography variant="h6">Contact</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ExampleFetchComponent;

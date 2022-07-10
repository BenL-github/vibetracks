import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Hero() {
  return (
    <Paper
        elevation="0"
        sx={{
            textAlign:'center',
            height:'70%',
            width:'50%',
            position: 'relative',
            backgroundColor: '#2d3139',
            color: '#fff',
            mt: 4,
            mb: 4,
            ml: 'auto',
            mr: 'auto',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', }}
    >
        <Typography variant="h3">
            Hello World
        </Typography>
    </Paper>
  );
}
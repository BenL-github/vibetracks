import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, textAlign:'center'}}>
      <AppBar elevation="0" position="static" className="navigation" sx={{backgroundColor:'#2d313900'}}>
        <Toolbar sx={{backgroundColor:'#2d313900', width:'50%', marginLeft:'auto',marginRight:'auto'}}>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">VibeTracks</Link>
          </Typography>
          <Button color="inherit">Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

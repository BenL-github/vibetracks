import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Menu() {

  return (
    <Container sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    }}>
        <Button color="inherit">Happy :)</Button>
        <Button color="inherit">Sad :( </Button>
    </Container>
  );
}
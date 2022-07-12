import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import image from './avalanches.webp';
import image2 from './phoebebridgers.jpeg';
import image3 from './jamiexx-incolour.webp';
import { useState } from 'react';
import Menu from './Menu';
import Button from '@mui/material/Button';

export default function Hero() {
  const [show, isShown] = useState(true);
  const [show2, isShown2] = useState(false);
  const [show3, isShown3] = useState(false);

  const handleClick = () => {
    isShown(false);
    isShown3(true);
  }

  const handleClick2 = () => {
    isShown(false);
    isShown2(true);
  }

  return (
    <Container
    elevation="0"
        sx={{
            textAlign:'center',
            height:'550px',
            width:'50%',
            position: 'relative',
            backgroundColor: '#2d313900',
            color: '#fff',
            mt: 4,
            mb: 4,
            ml: 'auto',
            mr: 'auto',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', }}
    >
        {show &&
        (<Typography variant="h3" sx={{mb:3}}>
            How are you feeling?
        </Typography>)}
        {show && (<img src={image3} width='50%'/>)}

        {show3 && 
        (<Typography variant="h6" sx={{mb:3}}>
            We Go On - The Avalanches
        </Typography>
        )}
        {show3 && (<img src={image} width='50%'/>)}

        {show2 && 
        (<Typography variant="h6" sx={{mb:3}}>
            Chinese Satellite - Phoebe Bridgers
        </Typography>
        )}
        {show2 && (<img src={image2} width='50%'/>)}
        
        
        {show && 
        (<Typography variant="body1" sx={{mt:3}}>
            I'm feeling... 
        </Typography>)}
        
        <Container sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
        }}>
        {show && (<Button onClick={handleClick} color="inherit">Happy :)</Button>)}
        {show && (<Button onClick={handleClick2} color="inherit">Sad :( </Button>)}
        {(show2 || show3)&& (<Button href="/" sx={{mt:3}} color="inherit">Retry</Button>)} 
    </Container>
    </Container>
  );
}
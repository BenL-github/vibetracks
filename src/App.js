import ButtonAppBar from './Nav';
import Container from '@mui/material/Container';
import Hero from './Main';
import Footer from './Footer';

function App() {
  return (
      <Container maxWidth='100%' disableGutters 
        sx={{ 
              overflow: 'auto', 
              height: "100vh ", 
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover', 
              backgroundColor:'#2d3139'
      }}>
        <ButtonAppBar/>
        <Hero/>
        <Footer/>
      </Container>
  );
}

export default App;

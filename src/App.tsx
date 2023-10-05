import { Button } from '@mui/base';
import { Home } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <Box>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton onClick={() => setCounter(0)}><Home></Home></IconButton>
          <Typography sx={{textTransform:'uppercase'}}>My App</Typography>
        </Toolbar>
      </AppBar>
      <Box p="25px">
        <Typography variant="h1">{counter}</Typography>
        <Button onClick={() => setCounter(counter+1)}>Add One</Button>
        <Button onClick={() => setCounter(0)}>Re-init</Button>
      </Box>
    </Box>
  );
}

export default App;

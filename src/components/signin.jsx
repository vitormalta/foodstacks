import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import api from '../services/api';
import Grid from '@mui/material/Grid';
import Anchor from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api.post(
      '/users',
      {
        email,
        password
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
          <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Foodstacks
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Manter conectado"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Link to="/Home">Entrar</Link>
            </Button>
            <Grid container>
              <Grid item xs>
                <Anchor href="#" variant="body2">
                  Esqueceu a senha?
                </Anchor>
              </Grid>
              <Grid item xs>
                <Link to="/SignUp">Não tem conta? Crie aqui</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
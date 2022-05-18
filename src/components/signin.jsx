import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import api from '../services/api';
import Grid from '@mui/material/Grid';
import Anchor from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn(props) {
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      navigate("/")
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/users/login', { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
      }).catch(error => console.log(error));
    navigate('/')
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >ENTRAR
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
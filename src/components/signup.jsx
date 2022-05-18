import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import api from '../services/api';
import Anchor from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Anchor color="inherit" href="https://foodstacks-api.herokuapp.com">
        Foodstacks
      </Anchor>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [cpf, setCpf] = useState('cpf');
  const [birthday, setBirthday] = useState('birthday');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api.post(
      '/users',
      {
        name,
        email,
        password,
        cpf,
        birthday
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
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PeopleAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}                 
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                  autoComplete="cpf"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                  required
                  fullWidth
                  name="birthday"
                  label="Data de Nascimento"
                  type="birthday"
                  id="birthday"
                  autoComplete="birthday"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/">Já possui cadastro? Entre aqui</Link>
                {/* <Link href="#" variant="body2">
                  Já possui cadastro? Entre aqui
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

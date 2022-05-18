import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import api from '../services/api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp() {
  const [nameRest, setNameRest] = useState('Nome da Loja');
  const [categoria, setCategoria] = useState('Categoria');
  const [imediacoes, setImediacoes] = useState('Imediações');
  const [descricao, setDescricao] = useState('Descrição do produto');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    api.post(
      '/restaurants',
      {
        nameRest,
        categoria,
        imediacoes,
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
            <FastfoodIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Cadastro de Loja
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setNameRest(e.target.value)}
                  value={nameRest}
                  nameRest ="nameRest"
                  required
                  fullWidth
                  id="nameRest"
                  label="Nome do Restaurante"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setCategoria(e.target.value)}                 
                  value={categoria}
                  required
                  fullWidth
                  id="categoria"
                  label="Categoria"
                  name="categoria"
                  autoComplete="categoria"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setImediacoes(e.target.value)}
                  value={imediacoes}
                  required
                  fullWidth
                  name="imediacoes"
                  label="Imediações"
                  type="imediacoes"
                  id="imediacoes"
                  autoComplete="imediacoes"
                />
              </Grid>
              <Grid item xs={30}>
                <TextField
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                  required
                  fullWidth
                  name="descricao"
                  label="Descrição"
                  type="descricao"
                  id="descricao"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "green" }}
            >
              Cadastrar Loja
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
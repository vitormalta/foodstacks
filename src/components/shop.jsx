import React, { useState, useEffect } from 'react';
import  { useNavigate } from 'react-router-dom'
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [userId, setUserId] = useState("");

  const [ location, setLocation ] = useState([]);
  const [ categories, setCategories ]  = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (!data) {
      navigate("/signin")
    } else {
      setUserId(JSON.parse(data).userId);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let listCategories = categories.split(",").map(cat => ({ name: cat }));
    const payload = {
      'userId': userId,
      'name': name,
      'description': description,
      'number': number,
      'locations': [{ 'name': location }],
      'categories': listCategories
    };
    console.log(payload);
    api.post('/shops', payload)
      .then((response) => {
        if (response.status === 200) {
          navigate("/")
        }
      })
      .catch(err => console.log(err))
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  type="text"
                  label="Nome da Loja"
                  fullWidth
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"              
                  value={description}
                  label="Descrição"
                  type="text"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={30}>
                <TextField
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  name="location"
                  label="Imediações"
                  type="text"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={30}>
                <TextField
                  onChange={(e) => setCategories(e.target.value)}
                  value={categories}
                  name="categories"
                  label="Categorias (separadas por vírgula)"
                  type="text"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  name="number"
                  label="Contato"
                  type="tel"
                  required
                  fullWidth
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
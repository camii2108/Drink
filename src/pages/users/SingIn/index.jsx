import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresa
          </Typography>

          <Formik
          initialValues={
            name:"",
            email:"",
          }}
          validate={(values)=>{
          const errors = {};
          const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

          if(!values.email){
              errors.email = "Email requerido";
          }else if (!regexpEmail.test(values.email)){
            errors.email = "email invalido";

          }
          if(!values.name){
            error.name = "nombre requerido";

          }

          return errors;
          }}
          {/* es para el spiner cuando esta cargando setSubmiting */}
          onSubmit={(values, {setSubmiting})=> {
            console.log(values)

            setSubmiting(false); 
          }}
          >
          
          {
            ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting

            }) => (
                {/*Imprelemtamoms formik  */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              fullWidth
              name="name"
              label="nombre"
              type="text"
              id="name"
              autofocus
              value = {values.name}
              error = [errors.name && touched.name]
              onchange={handleChange}
              onBlur={handleBlur}
              helpersText={errors.name && touched.name && errors.name}
            />  
          
          <TextField
          margin="normal"
          fullWidth
          name="email"
          label="email"
          type="email"
          id="email"
          autofocus
          value = {values.email}
          error = [errors.email && touched.email]
          onchange={handleChange}
          onBlur={handleBlur}
          helpersText={errors.email && touched.email && errors.email}
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 { "Dont have an account ? sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Formik>
          {/* ---------------------------- */}
            )
          }

        
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
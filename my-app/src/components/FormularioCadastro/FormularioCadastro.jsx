import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" color="primary" defaultChecked></Switch>
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" color="primary" defaultChecked></Switch>
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;

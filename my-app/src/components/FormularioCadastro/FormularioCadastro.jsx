import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCfp] = useState("");

  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >= 12) {
            tmpNome = tmpNome.substr(0, 12);
          }
          setNome(tmpNome);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          let tmpSobrenome = event.target.value;
          if (tmpSobrenome.length >= 50) {
            tmpSobrenome = tmpSobrenome.substr(0, 50);
          }
          setSobrenome(tmpSobrenome);
        }}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
        onChange={(event) => {
          let tmpCpf = event.target.value;
          if (tmpCpf.length >= 11) {
            tmpCpf = tmpCpf.substr(0, 11);
          }
          setCfp(tmpCpf);
        }}
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

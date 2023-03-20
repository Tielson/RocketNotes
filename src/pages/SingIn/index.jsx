import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../Hooks/auth.jsx";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  function handleSignIn() {
    if ( !email || !password) {
      return alert("Preencha todos os campos!")
    }
    try{
      signIn({email, password})

    }catch { error =>
     { if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("Não foi possível Logar")
      }}
    }
  }
  return (
    <Container>
      <Form>


        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus link úteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          Criar conta
        </Link>

      </Form>

      <Background />

    </Container>
  )
}
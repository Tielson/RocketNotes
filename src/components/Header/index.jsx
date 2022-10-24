import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"
import {Link} from 'react-router-dom'

export function Header(){
  return (
    <Container>
      <Profile to='/Profile'>

      <img src="https://github.com/Tielson.png" alt="Foto do perfil" />
      <div>
        <span>Bem-vindo</span>
        <strong>Filipe Tielson</strong>
      </div>
      </Profile>
      <Logout>
      <RiShutDownLine/>
      </Logout>
    </Container>
  )
}
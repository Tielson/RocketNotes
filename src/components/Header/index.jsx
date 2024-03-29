import { Container, Profile, Logout } from "./styles"
import avatarPlaceHolder from "../Assets/avatar_placeholder.svg"
import { RiShutDownLine } from "react-icons/ri"
import { useAuth } from "../../Hooks/auth";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()
  function handleSignOut() {
    navigate("/")
    signOut()
  }
  return (
    <Container>
      <Profile to='/profile'>

        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
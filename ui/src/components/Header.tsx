import { Link } from 'react-router-dom';
import { HeaderContainer, Logo } from '../styles';

export default function Header() {
  return (
    <HeaderContainer color='custom'>
      <Logo to="/">Search movies service</Logo>
      <div >
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </HeaderContainer>
  )
}
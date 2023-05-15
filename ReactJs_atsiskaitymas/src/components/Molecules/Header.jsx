import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  height: 50px;
  padding: 5px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom: 2px solid black;
  >nav{
    display:flex;
    gap: 40px;
  }
  >img{
    height:80%;
    
  }
`
const Header = () => {
  return ( 
    <StyledHeader>
      <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="logo" />
      <nav>
        <NavLink to='/LogIn'>Log In</NavLink>
        <NavLink to='/Register'>Register</NavLink>
        <NavLink to='/Home'>Home</NavLink>
        <NavLink to='/Add'>Add</NavLink>

      </nav>
    </StyledHeader>
   );
}
 
export default Header;
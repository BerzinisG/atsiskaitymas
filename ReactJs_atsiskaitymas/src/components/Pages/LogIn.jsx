import { useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {compareSync} from 'bcryptjs';
import styled from "styled-components";
import UsersContext from "../../context/UsersContext";

const StyledDiv = styled.div`

  > form{
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const LogIn = () => {
  const [formInputs, setFormInputs] = useState({
    email: '',
    password: ''
  });
  const [failedLogIn, setFailedLogIn] = useState(false);
  const { users, setCurrentUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const inputHandler = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
    setFailedLogIn(false);
  }

  const formSubmit = e => {
    e.preventDefault();
    const loggedInUser = users.find(user => user.email === formInputs.email && compareSync(formInputs.password, user.password));

    if(loggedInUser){
      setCurrentUser(loggedInUser);
      navigate('/Home');
    } else {
      setFailedLogIn(true);
    }
  }

  return ( 
    <StyledDiv>
     <form onSubmit={(e) => {formSubmit(e)}}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email" id="email"
            value={formInputs.email}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            value={formInputs.password}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <input type="submit" value="Log In" />
      </form>
      {
        failedLogIn &&
        <h1
          style={{ color:'red' }}
        >
          Neteisingi prisijungimo duomenys
        </h1>
      }
    </StyledDiv>
   );
}
 
export default LogIn;
import { createContext, useReducer, useEffect, useState } from "react";

const UsersContext = createContext();
const UsersActionTypes = {
  get: 'get_all_users',
  changeStatus: 'LogIn_or_notLogIn'
};

const reducer = (state, action) => {
  switch(action.type){
    case UsersActionTypes.get:
      return action.data;
    case UsersActionTypes.changeStatus:
      return state.map(el => {
        if(el.id === action.id){
          fetch(`http://localhost:8080/users/${action.id}`, {
            method: "PATCH",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({ logIn:!el.LogIn })
          })
          return { ...el, logIn:!el.LogIn }
        } else {
          return el;
        }
      })
    default:
      return state;
  }
}

const UsersProvider = ({ children }) => {

  const [users, setUsers] = useReducer(reducer, []);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setUsers({
        type: UsersActionTypes.get,
        data: data
      }));
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        UsersActionTypes,
        currentUser,
        setCurrentUser
      }}
    >
      { children }
    </UsersContext.Provider>
  );
}
 
export { UsersProvider };
export default UsersContext;
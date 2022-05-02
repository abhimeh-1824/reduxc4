import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
export const Login = () => {
  const [user,setUser] = useState()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  let navigate = useNavigate();
  useEffect(()=>{
    userlogin()
  },[])
  function userlogin()
  {
    axios.get("http://localhost:8080/users").then((e)=>{
      setUser(e.data)
      console.log(e.data)
    })
  }
  function authentication()
  {
    user.forEach(element => {
      if(element.username===username && element.pass===password)
      {
        console.log(element.role)
          if(element.role=="admin")
          {
            navigate("/orders")
            localStorage.setItem("username",element.username)
          }else{
            navigate("/neworder")
            localStorage.setItem("username",element.username)
          }
      }
    });
  }
 
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={authentication}>Login</button>
    </div>
  );
};

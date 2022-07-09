import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Componente = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    //if i uncoment this line the app doesn't show the message
    //const { logIn, googleSignIn } = useUserAuth();


  return (
    <>
      <div>
        <h1>hola a todos</h1>
      </div>
      
    </>
  );
};

export default Componente;
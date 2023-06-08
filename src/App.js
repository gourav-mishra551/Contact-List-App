import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactList from "./Components/LoggedIn/ContactList";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUp from "./Components/Form/FormRegister";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
      
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={isLoggedIn ? (
        <ContactList setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} /> 
      )} />
      <Route path="/form" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

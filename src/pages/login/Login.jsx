import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  if (isLoggedIn) {
    navigate("/home"); // redirect to home page after successful login
  }

  return (
    <div className="login">
      <h1 className="title">SMART BIN</h1>
      <h2 className="admin-message">Hello Admin!</h2>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSignIn} className="google-btn">
        Sign in with your USLS email
      </button>
    </div>
  );
};

export default Login;

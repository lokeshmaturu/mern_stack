import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

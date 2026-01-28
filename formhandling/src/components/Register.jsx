function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful (demo)");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>

      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

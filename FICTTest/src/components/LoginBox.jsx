import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", email);
      alert (`Hello, ${user.fullname}`)
    } else {
      alert("Invalid data or non-existing account")
    }
    
    navigate("/users")
  }

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

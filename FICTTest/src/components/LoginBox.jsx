import "./../styles/login.css"

export default function LoginBox() {
  return (
    <>
    <div className="container">
        <div className="form-box">
          <h2>Login</h2>
          <form>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Log in</button>
            <a href="">Or register here!</a>
          </form>
        </div>
      </div>
    </>
  )
}

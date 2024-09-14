import "./../styles/register.css";

export default function RegisterBox() {
  return (
    <>
      <div className="container">
        <div className="form-box">
          <h2>Register</h2>
          <form>
            <label htmlFor="nickname">Nickname</label>
            <input type="text" id="nickname" name="nickname" required />

            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" required />

            <label htmlFor="height">Height (in cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              required
              min="0"
              max="220"
            />

            <div className="gender-radios">
              <label>Gender</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
              <label htmlFor="female">Female</label>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

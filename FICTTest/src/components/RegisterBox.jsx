import { useState } from "react";
import "./../styles/register.css";

export default function RegisterBox() {
  const [formData, setFormData] = useState({
    nickname: "",
    fullname: "",
    email: "",
    password: "",
    birthday: "",
    height: "",
    gender: "male",
  });

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some(user => user.email === formData.email)) {
      alert("E-mail already in use.");
      return;
    }

    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData({
      nickname: "",
      fullname: "",
      email: "",
      password: "",
      birthday: "",
      height: "",
      gender: "male",
    });

    alert("Successful registration!");
  }

  return (
    <>
      <div className="container">
        <div className="form-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              required
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
              value={formData.nickname}
            />

            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              value={formData.fullname}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />

            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" required onChange={(e) =>
                setFormData({ ...formData, birthday: e.target.value })
              }
              value={formData.birthday}
              />

            <label htmlFor="height">Height (in cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              required
              min="0"
              max="220"
              onChange={(e) =>
                setFormData({ ...formData, height: e.target.value })
              }
              value={formData.height}
            />

            <div className="gender-radios">
              <label>Gender</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                required
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
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

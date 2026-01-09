import React, { useState } from "react";

const userData = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

const App = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { email, password } = user;

  function handleChange(e) {
    const { name, value } = e.target;
    setUserError("");
    setPasswordError("");
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const existedUser = userData.find((user) => user.email === email);
    const isPasswordTrue = existedUser?.password === password;
    if (existedUser) setTimeout(() => console.log(userData), 3000);
    if (!existedUser) return setUserError("User not found");
    if (!isPasswordTrue) return setPasswordError("Password Incorrect");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="input-email"
        name="email"
        value={email}
        placeholder="Email:"
        onChange={handleChange}
      />
      <input
        type="password"
        id="input-password"
        name="password"
        value={password}
        placeholder="Password:"
        onChange={handleChange}
      />
      <button id="submit-form-btn">Login</button>
      {userError && <p id="user-error">{userError}</p>}
      {passwordError && <p id="password-error">{passwordError}</p>}
    </form>
  );
};

export default App;

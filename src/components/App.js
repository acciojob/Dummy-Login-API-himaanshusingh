import React, { useState } from "react";

const users = [
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(""); // for "User not found"
  const [passwordError, setPasswordError] = useState(""); // for "Password Incorrect"
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setUserError("");
    setPasswordError("");
    setIsSubmitting(true);

    // Simulate dummy API call
    setTimeout(() => {
      const user = users.find((u) => u.email === email);

      if (!user) {
        const err = { message: "User not found" };
        console.log(err); // error case
        setUserError("User not found");
        setIsSubmitting(false);
        return;
      }

      if (user.password !== password) {
        const err = { message: "Password Incorrect" };
        console.log(err); // error case
        setPasswordError("Password Incorrect");
        setIsSubmitting(false);
        return;
      }

      console.log(user);
      setIsSubmitting(false);
    }, 3000);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div id="user-error" style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{userError}</div>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div id="password-error" style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{passwordError}</div>
        </div>

        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Login"}</button>
      </form>
    </div>
  ); // prettier-ignore
};

export default App;

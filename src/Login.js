import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [useErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandler(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good 😊");
    }

    e.preventDefault();
  }

  function userHandler(e) {
    let data = e.target.value;
    if (data.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }

    setUser(data);
  }

  function passwordHandler(e) {
    let data = e.target.value;
    if (data.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }

    setPassword(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="Enter user name"
          onChange={userHandler}
        />
        {useErr ? <span>user name invalid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter user password"
          onChange={passwordHandler}
        />
        {passErr ? <span>user password invalid</span> : ""}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

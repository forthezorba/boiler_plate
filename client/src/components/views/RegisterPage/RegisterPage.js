import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호가 일치하지 않습니다");
    }
    let body = {
      email: Email,
      name: Name,
      password: Password,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="">Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label htmlFor="">Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label htmlFor="">password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label htmlFor="">Password confirm</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
export default (RegisterPage);

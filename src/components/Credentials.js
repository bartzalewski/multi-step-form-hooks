import React from "react";

export default function Credentials(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { values, handleChange } = props;

  return (
    <>
      <h1>Enter credentials</h1>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChange("email")}
          defaultValue={values.firstName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange("password")}
          defaultValue={values.lastName}
        />
      </div>
      <button className="btn" onClick={next}>
        Next
      </button>
    </>
  );
}

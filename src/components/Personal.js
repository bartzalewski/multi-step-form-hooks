import React from "react";

export default function Personal(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;
  return (
    <>
      <h1>Enter personal details</h1>
      <div className="input-field">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
      </div>
      <div className="input-field">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={handleChange("age")}
          defaultValue={values.age}
        />
      </div>
      <div>
        <button className="btn" onClick={back}>
          Back
        </button>
        <button className="btn" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

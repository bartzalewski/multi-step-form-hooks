import React from "react";

export default function Confirm(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { email, firstName, lastName, age },
  } = props;
  return (
    <>
      <h1>Confirm your data</h1>
      <span>E-mail: {email}</span>
      <span>First name: {firstName}</span>
      <span>Last name: {lastName}</span>
      <span>Age: {age}</span>
      <div>
        <button className="btn" onClick={back}>
          Back
        </button>
        <button className="btn" onClick={next}>
          Submit
        </button>
      </div>
    </>
  );
}

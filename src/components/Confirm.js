import React from 'react';

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
    values: { firstName, lastName, email, occupation, city, bio },
  } = props;
  return (
    <>
      <h2>Confirm User Data</h2>
      <ul>
        <li>
          <span primary="First Name" secondary={firstName} />
        </li>
        <li>
          <span primary="Last Name" secondary={lastName} />
        </li>
        <li>
          <span primary="Email" secondary={email} />
        </li>
        <li>
          <span primary="Occupation" secondary={occupation} />
        </li>
        <li>
          <span primary="City" secondary={city} />
        </li>
        <li>
          <span primary="Bio" secondary={bio} />
        </li>
      </ul>
      <br />
      <button onClick={back}>Back</button>
      <button onClick={next}>Continue</button>
    </>
  );
}

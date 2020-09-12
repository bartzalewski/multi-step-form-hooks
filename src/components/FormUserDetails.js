import React from 'react';

export default function FormUserDetails(props) {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { values, handleChange } = props;

  return (
    <>
      <h2>Enter user details</h2>
      <input
        type="text"
        placeholder="Enter Your First Name"
        label="First Name"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your Last Name"
        label="Last Name"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your Email"
        label="Email"
        onChange={handleChange('email')}
        defaultValue={values.email}
      />
      <br />
      <button onClick={next}>Continue</button>
    </>
  );
}

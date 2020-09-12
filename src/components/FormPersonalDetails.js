import React from 'react';

export default function FormPersonalDetails(props) {
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
      <h2>Enter Personal Details</h2>
      <input
        type="text"
        placeholder="Enter Your Occupation"
        label="Occupation"
        onChange={handleChange('occupation')}
        defaultValue={values.occupation}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your City"
        label="City"
        onChange={handleChange('city')}
        defaultValue={values.city}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your Bio"
        label="Bio"
        onChange={handleChange('bio')}
        defaultValue={values.bio}
      />
      <br />
      <button onClick={back}>Back</button>
      <button onClick={next}>Continue</button>
    </>
  );
}

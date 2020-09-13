import React, { useState } from "react";
import styled from "styled-components";
import Credentials from "./Credentials";
import Personal from "./Personal";
import Confirm from "./Confirm";
import Success from "./Success";

const StyledCard = styled.div`
  background: #fff;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0.25);
`;

export default function UserForm() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
  });
  const values = user;

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) =>
    setUser({ ...user, [input]: e.target.value });

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <Credentials
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Personal
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  };

  return <StyledCard>{switchStep()}</StyledCard>;
}

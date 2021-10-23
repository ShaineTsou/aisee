import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import FormCardContainer from "../../components/form-card-container/FormCardContainer";
import PageTitle from "../../components/page-title/PageTitle";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SignupPage = ({ isSignin, handleSignin }) => {
  const [errorMassage, setErrorMessage] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Please type in the same password in confirm password");
      return;
    }

    const body = {
      displayName: displayName,
      email: email,
      password: password,
    };

    fetch("https://aisee-server.herokuapp.com/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          history.push("/aisee/profile");
          handleSignin(data);
        } else {
          setErrorMessage("Unable to sign up");
        }
      })
      .catch((err) => "Error signing up");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return isSignin ? (
    <Redirect to="/aisee/profile" />
  ) : (
    <PageContainer>
      <FormCardContainer>
        <PageTitle>Sign Up</PageTitle>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
          />
          <p className="warning">{errorMassage}</p>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
        <Link to="/aisee/signin">Sign In?</Link>
      </FormCardContainer>
    </PageContainer>
  );
};

export default SignupPage;

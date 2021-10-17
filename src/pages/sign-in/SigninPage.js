import { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import FormCardContainer from "../../components/form-card-container/FormCardContainer";
import PageTitle from "../../components/page-title/PageTitle";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SigninPage = ({ isSignin, handleSignin }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          history.push("/profile");
          handleSignin(data);
        } else {
          setErrorMessage(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return isSignin ? (
    <Redirect to="/profile" />
  ) : (
    <PageContainer>
      <FormCardContainer>
        <PageTitle>Sign In</PageTitle>

        <form className="sign-in-form" onSubmit={handleSubmit}>
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
          <p>{errorMessage}</p>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <Link to="/signup">Sign up?</Link>
      </FormCardContainer>
    </PageContainer>
  );
};

export default SigninPage;

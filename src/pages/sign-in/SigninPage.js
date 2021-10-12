import { useState } from "react";
import { Link } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import FormCardContainer from "../../components/form-card-container/FormCardContainer";
import PageTitle from "../../components/page-title/PageTitle";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SigninPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <Link to="/signup">Sign up</Link>
      </FormCardContainer>
    </PageContainer>
  );
};

export default SigninPage;

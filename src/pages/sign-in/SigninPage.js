import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

import PageContainer from "../../components/page-container/PageContainer";
import FormCardContainer from "../../components/form-card-container/FormCardContainer";
import PageTitle from "../../components/page-title/PageTitle";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SignInPage = ({ setCurrentUser }) => {
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

    fetch("https://aisee-server.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user_id) {
          history.push("/aisee/profile");
          setCurrentUser({
            userId: data.user_id,
            displayName: data.display_name,
            email: data.email,
            joinedDate: data.joined_date,
          });
        } else {
          setErrorMessage(data);
        }
      })
      .catch((err) => "Error signing in");
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
          <p className="warning">{errorMessage}</p>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <Link to="/aisee/signup">Sign up?</Link>
      </FormCardContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignInPage);

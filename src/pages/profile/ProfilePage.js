import { Redirect } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import PageTitle from "../../components/page-title/PageTitle";

const ProfilePage = ({ isSignin, userInfo }) => {
  const { display_name, email, joined_date } = userInfo;

  return isSignin ? (
    <PageContainer>
      <PageTitle>Profile Page</PageTitle>
      <h1>Hello, {display_name}</h1>
      <p>Your email is: {email}</p>
      <p>You joined at {joined_date}</p>
    </PageContainer>
  ) : (
    <Redirect to="/signin" />
  );
};

export default ProfilePage;

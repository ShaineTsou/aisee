import { Redirect } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import PageTitle from "../../components/page-title/PageTitle";

const ProfilePage = ({ isSignin, userInfo }) => {
  const { userId, displayName, email, joinedDate } = userInfo;

  return isSignin ? (
    <PageContainer>
      <PageTitle>Profile Page</PageTitle>
      <h1>Hello, {displayName}</h1>
      <p>Your userId is: {userId}</p>
      <p>Your email is: {email}</p>
      <p>You joined at {joinedDate}</p>
    </PageContainer>
  ) : (
    <Redirect to="/signin" />
  );
};

export default ProfilePage;

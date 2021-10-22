import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import PageContainer from "../../components/page-container/PageContainer";
import PageTitle from "../../components/page-title/PageTitle";
import ProfileResult from "../../components/profile-result/ProfileResult";

const ProfilePage = ({ isSignin, userInfo }) => {
  const { userId, displayName } = userInfo;
  const [userResults, setUserResults] = useState([]);

  useEffect(() => {
    if (userId !== 0) {
      fetch(`http://localhost:8080/profile/${userId}`)
        .then((response) => response.json())
        .then((resultsArr) => {
          if (Array.isArray(resultsArr) && resultsArr.length) {
            setUserResults(resultsArr);
          }
        });
    }
  }, [userId]);

  return isSignin ? (
    <PageContainer>
      <PageTitle>Hello, {displayName}</PageTitle>
      {userResults.length ? (
        <>
          <h1>Your Results</h1>
          <p>↓ Click on color tag to copy hex code ↓</p>
          {userResults.map((result) => (
            <ProfileResult result={result} key={result.resultId} />
          ))}
        </>
      ) : (
        <p>You haven't detected any pictures yet.</p>
      )}
    </PageContainer>
  ) : (
    <Redirect to="/signin" />
  );
};

export default ProfilePage;

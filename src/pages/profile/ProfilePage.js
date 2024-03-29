import { useState, useEffect } from "react";
import { connect } from "react-redux";

import SEO from "../../components/seo/Seo";
import PageContainer from "../../components/page-container/PageContainer";
import PageTitle from "../../components/page-title/PageTitle";
import Loader from "../../components/loader/Loader";
import ProfileResult from "../../components/profile-result/ProfileResult";

const ProfilePage = ({ currentUser }) => {
  const { userId, displayName } = currentUser;

  const [loaderHidden, setLoaderHidden] = useState(false);
  const [userResults, setUserResults] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (userId !== 0) {
      fetch(`https://aisee-server.herokuapp.com/profile/${userId}`)
        .then((response) => response.json())
        .then((resultsArr) => {
          if (mounted) {
            if (Array.isArray(resultsArr) && resultsArr.length) {
              setUserResults(resultsArr);
            }
            setLoaderHidden(true);
          }
        });
    }

    return function cleanup() {
      mounted = false;
    };
  }, [userId]);

  return (
    <PageContainer>
      <SEO title={displayName} />
      <Loader loaderHidden={loaderHidden} />
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
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(ProfilePage);

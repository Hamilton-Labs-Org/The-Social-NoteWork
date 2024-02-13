import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import EmailVerify from '../components/EmailVerify';
import {VERIFY_USER} from '../gql/mutation';

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 35);
  console.log('page to reload');
}

const VerifyUser = (props) => {
  useEffect(() => {
    // update the document title
    document.title = 'Verify Email — NoteWork';
  });

  const navigate = useNavigate();

  // add the mutation hook
  const [verifyUser, {loading, error}] = useMutation(VERIFY_USER, {
    onCompleted: (data) => {
      refreshPage();
      // console.log the JSON Web Token when the mutation is complete
      // localStorage.setItem('token', data.signUp);
      // isLoggedInVar(true);
      // redirect the user to the homepage
      // props.history.push("/");
      navigate('/signin');
    },
  });
  if (loading) return <p>Loading</p>;
  if (error) {
    console.log(JSON.stringify(error));
    return <p>An error occurred</p>;
  }
  return (
    <>
      <EmailVerify action={verifyUser} formType="verify" />
      {/* if the data is loading, display a loading message*/}
      {loading && <p>Loading...</p>}
      {/* if there is an error, display a error message*/}{' '}
      {error && <p>Error creating an account!</p>}
    </>
  );
};

export default VerifyUser;

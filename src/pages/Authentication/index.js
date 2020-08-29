import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import PasswordReset from 'components/PasswordReset';
import {
  createUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  resetUserPassword
} from 'utils/request';

const Authentication = () => {
  const [inputVals, setInputVals] = useState({});
  const [error, setError] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false)

  let { slug } = useParams();

  useEffect(() => {
    initializeState();
  }, [slug])

  const initializeState = () => {
    setInputVals({});
    setError('');
    setEmailHasBeenSent(false)
  }

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        return setInputVals({
          ...inputVals, email: value
        })
      case 'password':
        return setInputVals({
          ...inputVals, password: value
        })
      default:
        return setInputVals({
          ...inputVals, displayName: value
        })
    }
  }

  const { email, password, displayName = '' } = inputVals;

  const handleSignUpWithEmailAndPassword = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password, displayName, setError)
  }

  const handleSignInWithEmailAndPassword = event => {
    event.preventDefault();
    signInUserWithEmailAndPassword(email, password, setError)
  };

  const handlePasswordReset = event => {
    event.preventDefault();
    resetUserPassword(email, setEmailHasBeenSent, setError)
  }

  switch (slug) {
    case 'signin':
      return <SignIn
        handleSignIn={handleSignInWithEmailAndPassword}
        inputChange={handleInputChanges}
        values={inputVals}
        error={error}
      />
    case 'reset':
      return <PasswordReset
        handleReset={handlePasswordReset}
        inputChange={handleInputChanges}
        isMailSent={emailHasBeenSent}
        values={inputVals}
        error={error}
      />
    default:
      return <SignUp
        handleSignUp={handleSignUpWithEmailAndPassword}
        inputChange={handleInputChanges}
        values={inputVals}
        error={error}
      />
  };
}

export default Authentication;
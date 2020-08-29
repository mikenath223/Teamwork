import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { signInWithGoogle } from 'utils/firebaseConfig';


const SignIn = (props) => {
  const { inputChange, handleSignIn, values: {
    email = '', password = '' }, error } = props;

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn} >
        <label htmlFor="email">
          Email
        <input type="text" name="email" value={email} onChange={inputChange} required />
        </label>

        <label htmlFor="password">
          Password
        <input type="password" name="password" value={password} onChange={inputChange} required />
        </label>
        <input type="submit" value="Sign In" />
        <p>{error}</p>
      </form>
      or{" "}
      <Button onClick={signInWithGoogle}>
        Sign in with Google
    </Button>
      <p>
        Don't have an account? {" "}
        <Link to="/auth/signup">
          Sign up
      </Link>{" "}
        <Link to="/auth/reset">
          Forgot Password?
      </Link>
      </p>
    </div>
  )
};

// SignIn.propTypes = {
//   handleSignInChange: PropTypes.func.isRequired,
//   handleSigninSubmit: PropTypes.func.isRequired,
//   load: PropTypes.bool.isRequired,
// };

export default SignIn;

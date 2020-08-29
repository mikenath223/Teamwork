import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { signInWithGoogle } from 'utils/firebaseConfig';

const SignUp = (props) => {
  const { inputChange, handleSignUp, values: { 
    displayName = '', email = '', password = '' }, error } = props;

  return (
    <div>
      <form onSubmit={handleSignUp} >
        <h1>Sign Up</h1>
        <label htmlFor="username">
          Username
        {' '}
          <br />
          <input type="text"
            name="username"
            maxLength="10"
            value={displayName}
            onChange={inputChange} required />
        </label>

        <label htmlFor="username">
          Email
        {' '}
          <br />
          <input type="email"
            name="email"
            value={email}
            onChange={inputChange} required />
        </label>

        <label htmlFor="password">
          Password
        {' '}
          <br />
          <input type="password"
            name="password"
            minLength="6"
            value={password}
            onChange={inputChange} required />
        </label>
        <input type="submit" value="Sign Up" />
        <p>{error}</p>
      </form>
      or{" "}
      <Button onClick={signInWithGoogle}>
        Sign in with Google
    </Button>
      <p>
        Already have an account?
      <Link to="/auth/signin">
          Sign in
      </Link>
      </p>
    </div>
  )
};

// SignUp.propTypes = {
//   handleRegChange: PropTypes.func.isRequired,
//   handleRegSubmit: PropTypes.func.isRequired,
//   load: PropTypes.bool.isRequired,
// };

export default SignUp;

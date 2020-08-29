import React from 'react';

const PasswordReset = ({ values: { email }, inputChange, handleReset, isMailSent, error }) => (
  <div>
    <h1>Reset Password</h1>
    <form onSubmit={handleReset}>
      <label htmlFor="email">
        Email
        <input type="email" value={email} name="email" onChange={inputChange} required />
      </label>
      <input type="submit" value="Send Reset Email" />
      <p>{error || (isMailSent && 'Reset mail has been sent')}</p>
    </form>
  </div>
);

export default PasswordReset;
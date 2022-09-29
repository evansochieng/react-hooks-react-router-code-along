import React from "react";

function SignUp(){
  return (
    <div>
      <h3>Sign up here</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="email" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp;
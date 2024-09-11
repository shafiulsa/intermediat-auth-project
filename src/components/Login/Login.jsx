import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  
   const {signInUser, signInWithGoogle } =useContext(AuthContext);

   const navigate =useNavigate();

   const handlelogin= e=>{
    e.preventDefault();
    console.log('log in happed');
    const email=e.target.email.value;
    const password= e.target.password.value;
    console.log(email,password)

    signInUser(email,password)
    .then(result => {
      console.log(result.user);

      e.target.reset();  
      //form reset ar por ata k home rout a pathi dai
      navigate('/');
    })
    .catch( error => console.error(error))    
   }

   const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => console.error(error))
   }

    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>new in this website ? <NavLink to='/regester' className='text-blue-400 text-bold'>Regester</NavLink> </p>

        <p><a onClick={handleGoogleSignIn} className="btn btn-ghost">Google</a> </p>

      </form>
    </div>
  </div>
</div>
    );
};

export default Login;
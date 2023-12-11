import React, {useState} from 'react'
import InputControl from '../InputControl/InputControl'

import { Link , useNavigate } from 'react-router-dom'

import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Login = () => {
    const navigate = useNavigate();
  const[values, setValues] = useState({
    email: "",
    password: "",
  });

  const [ errorMsg , setErrorMsg ] = useState("");
  const [ submintButtonDisable , setSubmintButtonDisable ] = useState(false);

  const handleSubmission=(event)=>{
    event.preventDefault();

    if (!values.email || !values.password) {
        setErrorMsg("Fill in all fields");
        return;
      }
    setErrorMsg("");  

    setSubmintButtonDisable(true);

    console.log("valus ",values);
    signInWithEmailAndPassword(auth, values.email, values.password)
  .then(async(res) => {
    setSubmintButtonDisable(false);

    navigate("/")
  })

  .catch((err) => {
    setSubmintButtonDisable(false);
    setErrorMsg(err.message)
  });
  };

  return (
    <div className=''>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login  to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <InputControl  type="email" name="email" id="email" placeholder="name@company.com" required 
                       onChange={(event) => 
                        setValues((prev) => ({...prev,email: event.target.value}))}/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <InputControl  type="password" name="password" id="password" placeholder="Enter your password" required 
                      onChange={(event) => 
                        setValues((prev) => ({...prev,password: event.target.value}))}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <b className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {errorMsg} </b>
                  <button onClick={handleSubmission} disabled={submintButtonDisable} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link href="/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
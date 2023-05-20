import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useForm } from "react-hook-form";
import logo1 from '../../assets/logos/google.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate(); 
    useTitle("Login");

    const from = location.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        setError('')
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Yep...',
                    text: 'User login successfully!',
                  })
                navigate(from, {replace: true});
            })
            .catch(error => {
              setError(error.message);
              console.log(error)
            })
            //console.log(data);
      };

      const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
        .then(result => {
          console.log(result.user);
          Swal.fire({
            icon: 'success',
            title: 'Yep...',
            text: 'User login successfully!',
          })
          //navigate(from, { replace: true });
        })
        .catch(error => {
          setError(error.message);
          console.log(error)
        })
      }
    return (
        <div className="my-4 login-card mx-auto">
      <h2 className="text-2xl font-bold mb-8">Login Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Username or Email</label>
        <input defaultValue="" {...register("email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Password</label>
        <input {...register("password", { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Login"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        <p><small>New to Toy Town Please <Link to='/signUp' className="text-pink-600 font-bold">Sign Up</Link></small></p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="divider mt-10">OR</div>
      <div>
        <div onClick={handleGoogleSignIn} className="flex items-center social-login my-4">
            <img className="w-8 h-8 ml-4" src={logo1} alt="" />
            <p className="mx-auto">Continue with Google</p>
        </div>
      </div>
    </div>
    );
};

export default Login;
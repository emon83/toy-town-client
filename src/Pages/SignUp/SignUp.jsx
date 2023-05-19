import { Link } from 'react-router-dom';
import './SignUp.css'
import { useForm } from "react-hook-form";
import logo1 from '../../assets/logos/google.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser, googleSignIn} = useContext(AuthContext);
    useTitle("SignUp");
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      const name = data.userName;
      const email = data.email;
      const password = data.password;
      const photoURL = data.photoUrl;
      createUser(email, password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserData(result.user, name, photoURL);
              Swal.fire({
                icon: 'success',
                title: 'Yep...',
                text: 'User signUp successfully!',
              })
          })
          .catch(error => console.log(error))
          console.log(data);
    };

    const updateUserData = (user, name, photoURl) =>{
        updateProfile(user, {
          displayName:name, 
          photoURL: photoURl,
        })
        .then(() => {
          console.log("user name updated successfully");
        })
        .catch((error) => {
          //setError(error.message);
          console.log(error);
        })
      }

    const handleGoogleSignIn = () => {
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
            console.log(error)
        })
      }

    return (
        <div className="my-4 signUp-card mx-auto">
        <h2 className="text-2xl font-bold mb-8">Sign Up Please</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>Full Name</label>
          <input defaultValue="" {...register("userName")} />

          {/* include validation with required or other standard HTML validation rules */}
          <label>Username or Email</label>
          <input {...register("email", { required: true })} />
          {/* register your input into the hook by invoking the "register" function */}
          <label>Password</label>
          <input type="password" defaultValue="" {...register("password")} />
          {/* register your input into the hook by invoking the "register" function */}
          <label>Photo Url</label>
          <input type="url" defaultValue="" {...register("photoUrl")} />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="sign up" className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl" />
          <p><small>Already have an Account Please <Link to='/login' className="text-pink-600 font-bold">Login</Link></small></p>
        </form>
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

export default SignUp;
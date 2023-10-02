import Lottie from "react-lottie";
import animation from "../../assets/animation_login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/logos/google.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  useTitle("SignUp");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;

  const onSubmit = (data) => {
    const name = data.userName;
    const email = data.email;
    const password = data.password;

    //Image upload
    const formData = new FormData();
    formData.append('image', data.photoUrl[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        // console.log(imageUrl);
        createUser(email, password)
          .then((result) => {
            const loggedUser = result.user;
            updateUserData(loggedUser, name, imageUrl)
              .then(() => {
                toast.success("Signup successful");
                //save user to db

                navigate(from, { replace: true });
              })
              .catch((err) => {
                // setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });
      });
    console.log(data);
  };

  const updateUserData = (user, name, photoURl) => {
    setError("");
    updateProfile(user, {
      displayName: name,
      photoURL: photoURl,
    })
      .then(() => {
        console.log("user name updated successfully");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("User signed in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="md:flex justify-center items-center md:h-[100vh] bg-[#caf0f8]">
      <Toaster />
      <div className="md:w-1/2 signUp-card bg-gray-100 mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Sign Up Please</h2>
        <p className="text-sm text-gray-400 mb-4 text-center">Welcome to Toy Town</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xs sm:text-sm">Full Name</label>
          <input defaultValue="" {...register("userName")} />
          {errors.userName && <span className="text-sky-500 text-xs font-semibold">This field is required</span>}

          <label className="text-xs sm:text-sm">Username or Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span className="text-sky-500 text-xs font-semibold">This field is required</span>}

          <label className="text-xs sm:text-sm">Password</label>
          <input type="password" defaultValue="" {...register("password")} />
          {errors.password && <span className="text-sky-500 text-xs font-semibold">This field is required</span>}

          <label className="text-xs sm:text-sm">Photo Url</label>
          <input
            required
            type="file"
            accept="image/*"
            {...register("photoUrl")}
          />
          {errors.photoUrl && <span className="text-sky-500 text-xs font-semibold">This field is required</span>}

          <input
            type="submit"
            value="sign up"
            className="btn btn-sm sm:btn-md btn-color border-none btn-block rounded-3xl"
          />
        </form>

        <p className="text-color text-xs font-semibold">{error}</p>
        <p className="px-3 text-sm text-gray-600 text-center mt-3">
            SignUp with social accounts
          </p>
        <div>
          <div
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-4 social-signup mt-3"
          >
            <img className="w-6" src={logo} alt="Google Logo" />
            <p className="text-sm sm:text-base">Continue with Google</p>
          </div>
          <p className="text-center mt-3 text-gray-600">
            <small className="text-xs sm:text-sm">
              Already have an Account Please{" "}
              <Link to="/login" className="text-color font-bold">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <Lottie options={defaultOptions} height={475} width={370} />
      </div>
    </div>
  );
};

export default SignUp;

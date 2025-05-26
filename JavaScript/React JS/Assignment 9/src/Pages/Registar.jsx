import React, { use, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";

const Registar = () => {
  const { createUser, setUser, SignInGoogle, SignInFacebook } =
    use(AuthContext);

  const handlecreateAccount = (e) => {
    e.preventDefault();

    const Name = e.target.Name.value;
    const Photo = e.target.photo.value;
    const Email = e.target.Email.value;
    const Password = e.target.Password.value;

    createUser(Email, Password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: Name,
          photoURL: Photo,
        })
          .then(() => {
            swal({
              text: "You have successfully signed in",
              icon: "success",
              button: {
                text: "Okay",
                closeModal: true,
              },
            });
            setUser({
              ...user,
              displayName: Name,
              photoURL: Photo,
            });
          })
          .catch((error) => {
            swal({
              text: error.message,
              icon: "error",
              button: {
                text: "Okay",
                closeModal: true,
              },
            });
          });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  const handleGoogleSignIn = () => {
    SignInGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);

        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  const handleFacebokSignIn = () => {
    SignInFacebook()
      .then((res) => {
        const user = res.user;
        setUser(user);

        swal({
          text: "You have successfully signed in",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
      });
  };

  useEffect(() => {
    document.title = "Register Page | App Store";
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-center items-center">
      {/* Registration Card */}
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm rounded-2xl shadow-3xl p-[3px] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="card bg-base-100 w-full shrink-0">
          <div className="card-body">
            <h2 className="text-center text-xl sm:text-2xl font-bold">
              Register Now
            </h2>
            <form onSubmit={handlecreateAccount} className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="label">Your Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Name"
                  name="Name"
                  required
                />
              </div>

              {/* Photo */}
              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                  name="photo"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  name="Email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  name="Password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </div>

              <button type="submit" className="btn btn-neutral w-full mt-2">
                Register
              </button>
            </form>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Or separator */}
      <p className="text-lg mt-6 text-gray-400">----------or----------</p>

      {/* Social Buttons */}
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm mt-5">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full text-base sm:text-lg flex items-center justify-center gap-3"
        >
          <FcGoogle className="text-xl" /> Sign In With Google
        </button>
      </div>

      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm mt-4">
        <button
          onClick={handleFacebokSignIn}
          className="btn btn-outline w-full text-base sm:text-lg flex items-center justify-center gap-3"
        >
          <ImFacebook2 className="text-xl" /> Sign In With Facebook
        </button>
      </div>
    </div>
  );
};

export default Registar;

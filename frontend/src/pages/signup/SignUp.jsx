import React from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const [inputs, setInputs] = React.useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
          <span className="text-orange-600 "> Lumichat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            {/* FULL NAME INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Udin petot"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({...inputs, fullName: e.target.value })
              }
            />
            {/* USERNAME INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({...inputs, username: e.target.value })
              }
            />
            {/* PASSWORD INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({...inputs, password: e.target.value })
              }
            />
            {/* CONFIRM PASSWORD INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
            <GenderCheckBox onCheckboxChange ={handleCheckboxChange} selectedGender ={inputs.gender} />
          <div>
            <button className="btn btn-block btn-sm mt-4 bg-rose-900 border-none" disabled={loading}>
              {loading? <span className="loading loading-spinner"></span> : "Sign up"}
            </button>


            <Link
              to="/login"
              className="text-sm hover:text-blue-600 mt-4 inline-block"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


// FOR REFERENCE JUST IN CASE
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign up
//           <span className="text-orange-600 "> Lumichat</span>
//         </h1>

//         <form>
//           <div>
//             {/* FULL NAME INPUT */}
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Udin petot"
//               className="w-full input input-bordered h-10"
//             />
//             {/* USERNAME INPUT */}
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//             {/* PASSWORD INPUT */}
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//             {/* CONFIRM PASSWORD INPUT */}
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//             <GenderCheckBox />
//           <div>
//             <button className="btn btn-block btn-sm mt-4 bg-rose-900 border-none">
//               Sign Up
//             </button>


//             <a
//               href="#"
//               className="text-sm hover:text-blue-600 mt-4 inline-block"
//             >
//               Already have an account?
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

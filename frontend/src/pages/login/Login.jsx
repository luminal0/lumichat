import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-orange-600 "> Lumichat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            {/* USERNAME INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* PASSWORD INPUT */}
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-4 bg-rose-900 border-none" disabled={loading}>
            {loading? <span className="loading loading-spinner"></span> : "Login"}
            </button>
            <Link
              to="/signup"
              className="text-sm hover:text-blue-600 mt-4 inline-block"
            >
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// FOR REFERENCE JUST IN CASE
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//         <span className="text-orange-600 "> Lumichat</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-4 bg-rose-900 border-none">
//               Login
//             </button>
//             <a href="#" className="text-sm hover:text-blue-600 mt-4 inline-block">
//             Don't have an account?
//           </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   )

// };

// export default Login;

import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 card bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered w-full" />
          </div>
          <button className="btn btn-primary w-full">Login</button>
        </form>
        <p className="text-center">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

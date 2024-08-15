import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 card bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
          </div>
          <button className="btn btn-primary w-full">Register</button>
        </form>
        <p className="text-center">
          Already have an account?<Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

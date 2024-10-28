//import HomePage from "./HomePage.jsx";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    // On success, navigate to home page
    navigate("/home");
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-6">
                <Select>
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder="Login as" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faculty">Faculty Incharge</SelectItem>
                    <SelectItem value="aia">Association Member</SelectItem>
                    <SelectItem value="aicc">Coding Club Member</SelectItem>
                    <SelectItem value="pc">Placement Coordinator</SelectItem>
                    <SelectItem value="ief">IEF Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="email"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="username"
                />
                <label
                  htmlFor="username"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Username
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="current-password"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6 text-center">
                <button
                  type="submit"
                  className="w-[100px] rounded-xl bg-black px-1 py-2 text-white focus:bg-gray-600 focus:outline-none text-center"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 px-0">
                <a
                  href="#!"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Forgot Password?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

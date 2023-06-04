import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGithub, logout } from "../redux/actions/auth.action";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    // Redirect the user to the GitHub authorization URL
    window.location.href = `https://github.com/login/oauth/authorize?client_id=ea02d3b235d3b9930f01&redirect_uri=http://localhost:3000/callback`;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCallback = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      dispatch(loginWithGithub(code));
    }
  };

  // Call the handleCallback function when the component mounts
  React.useEffect(() => {
    handleCallback();
  }, []);

  return (
    <div className="dark:bg-black shadow-trend text-center w-[40%] p-4 mt-4 m-auto">
      <h2 className="text-[22px] font-bold dark:text-white  ">Home Page</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.login}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button
            className="p-2 border mt-2 border-green-600 rounded font-bold dark:text-white "
            onClick={handleLogin}
          >
            Login with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;

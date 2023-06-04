import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth.action";

const CallbackPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Dispatch the login action with the code
      dispatch(login(code));
    } else {
      // Handle authentication failure
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Logging in...</h1>
      {/* You can show a loading spinner or a message here */}
    </div>
  );
};

export default CallbackPage;

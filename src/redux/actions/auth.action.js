import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginWithGithub = (code) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          client_id: "ea02d3b235d3b9930f01",
          client_secret: "6b98c83799d87440c2283503b64687d1cc279783",
          code: code,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const accessToken = response.data.access_token;

      const userResponse = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });

      dispatch(loginSuccess(userResponse.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

const login = (id, password) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    // console.log("work");
  };
};

export const authenticateAction = { login };

import { useReducer, useEffect } from "react";
import { isModuleNamespaceObject } from "util/types";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type LoginPayload = {
  userName: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        name: "",
      };
    case "login":
      const { userName, name } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        userName,
        name,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const handleLogin = () => {
    dispatch({
      type: "login",
      payload: { userName: "Dani T", name: "Daniela" },
    });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando....</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {name} </div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}
      {token ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;

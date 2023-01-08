import LoginForm from "./LoginForm.js";
function Login(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Capstone Admin Login"), /*#__PURE__*/React.createElement(LoginForm, {
    onLoginButtonPressed: () => setLoggedIn(true)
  }), loggedIn ? /*#__PURE__*/React.createElement("h2", null, "Logged In") : /*#__PURE__*/React.createElement("h2", null, "Logged Out"), loggedIn && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      localStorage.removeItem("jwtExists");
      setLoggedIn(false);
    }
  }, "Sign Out"));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(Login, null));
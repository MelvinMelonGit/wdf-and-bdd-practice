import LoginForm from "./LoginForm";

function Login(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <main>
      <h1>
        Capstone Admin Login
      </h1>
      <LoginForm onLoginButtonPressed={() => setLoggedIn(true)} />
      {loggedIn ? <h2>Logged In</h2> : <h2>Logged Out</h2>}
      {loggedIn && <button
        onClick={() => {
          localStorage.removeItem("jwtExists");
          setLoggedIn(false);
        }}
        >
        Sign Out
      </button>
      }
    </main>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
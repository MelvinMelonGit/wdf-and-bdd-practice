import LoginForm from "./LoginForm";

function Login(props) {
  return (
    <main>
      <h1>
        Admin Login2
      </h1>
      <LoginForm />
    </main>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
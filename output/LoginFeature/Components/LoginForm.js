export default function LoginForm(props) {
  const initialValue = {
    email: '',
    password: ''
  };
  const [loginFields, setLoginFields] = React.useState(initialValue);
  function handleChange(e) {
    setLoginFields({
      ...loginFields,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      email: loginFields.email,
      password: loginFields.password
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };
    fetch('http://localhost:8081/user/login/', options).then(response => {
      response.json();
    }).then(data => {
      console.log(data);
      // Do something with response.
    });
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: loginFields.email,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    value: loginFields.password,
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit"
  }, "Sign In"));
}
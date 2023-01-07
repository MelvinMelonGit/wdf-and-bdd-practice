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
            body: JSON.stringify(params) ,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }, 
        };
    
        fetch('http://localhost:8081/user/login/', options)
            .then(response => response.json())
            .then(data => console.log(data["JWT"]));
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={loginFields.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={loginFields.password}
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
            >
                Sign In
            </button>
        </form>
    );
}
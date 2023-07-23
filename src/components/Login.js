
import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from './validation';

const Login = () => {

    const navigate = useNavigate();
    const [input,setInput] = useState({
        email : "",
        password : "",
      });

    //input validation
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });   
        e.preventDefault();
        setErrors(validation(input));
    };


    // data get in localstorage
      const handleLogin = (e) => {
        e.preventDefault();

        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password)
        {
            localStorage.setItem("Loggedin", true);
            navigate("/");
        }
        else{
            alert("Wrong Email or Password")
        }
      };

  return (
    <div className="container-fluid ">
    <div className="row no-gutter">
        {/* The image half */} 
        <div className="col-md-5 d-none d-md-flex bg-login-image"></div>


        {/* The content half */}
        <div className="col-md-7 bg-light">
            <div className="login d-flex align-items-center py-5">

                {/* Demo content */}
                <div className="container h-50%">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Login page!</h3>
                            <p className="text-muted mb-4">Login here for your account.</p>

                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-4">
                                    <input 
                                    id="inputEmail" 
                                    type="email"
                                    name='email' 
                                    value={input.email}
                                    onChange={handleChange} 
                                    placeholder="Email address" 
                                    required 
                                    autofocus
                                    className="form-control rounded-pill border-0 shadow-sm px-4"
                                    />
                                    {errors.email && <p className='error'>{errors.email}</p>}
                                </div>

                                <div className="form-group mb-4">
                                    <input 
                                    id="inputPassword" 
                                    type="password" 
                                    name='password' 
                                    value={input.password}
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    required
                                    className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                    />
                                    {errors.password && <p className='error'>{errors.password}</p>}
                                </div>

                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-0 rounded-pill shadow-sm">
                                    Login
                                </button>
                                
                                <div className="text-center d-flex justify-content-between mt-3"><p> Need a create account? 
                                    <Link to="/Register" class="font-italic text-muted"> <u>Register here</u></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>{/* END */}

            </div>
        </div>  {/* END */}
    </div>
</div>

  )
}

export default Login

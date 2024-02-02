import React, { useRef } from 'react'
import './Login.css'
import axios from 'axios';
import Cookies from 'js-cookie';


function Login() {
    const Name = useRef();
    const Email = useRef();
    const Password = useRef();

    const handleLogin = () => {
        const data = {
            Name: Name.current.value,
            Email: Email.current.value,
            Password: Password.current.value,
        }
        // console.log(data);

        axios.post("https://voater-backend-app.onrender.com/v1/login", data).then((res) => {
            // if(res.status===200){
            const _id = res.data.data._id;
            const role = res.data.data.Role;
            const Name = res.data.data.Name;
            const Profile = res.data.data.Profile;
            // console.log(_id,role,name);
            Cookies.set("role", role);
            Cookies.set("name", Name);
            Cookies.set("profile", Profile);
            Cookies.set("_id", _id);
            window.location = "/";
            // }
            console.log(res, "dfdf");
        })
    }

    const handleSignUP = () => {
        const data = {
            Name: Name.current.value,
            Email: Email.current.value,
            Password: Password.current.value,
        }
        // console.log(data);

        axios.post("https://voater-backend-app.onrender.com/v1/login", data).then((res) => {
            // if(res.status===200){
            const _id = res.data.data._id;
            const role = res.data.data.Role;
            const Name = res.data.data.Name;
            const Profile = res.data.data.Profile;
            // console.log(_id,role,name);
            Cookies.set("role", role);
            Cookies.set("name", Name);
            Cookies.set("profile", Profile);
            Cookies.set("_id", _id);
            window.location = "/";
            // }
            console.log(res, "dfdf");
        })
    }

    return (
        <>

            <div className='div'>
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    {/* // sign up page */}
                    <div class="signup">
                        <label for="chk" aria-hidden="true">E - Election</label>
                        <input type="text" name="txt" placeholder="User name" className='input' required="" ref={Name} />
                        <input type="email" name="email" placeholder="Email" className='input' required="  " ref={Email} />
                        <input type="password" name="pswd" placeholder="Password" className='input' required="" ref={Password} />
                        <button className='button' onClick={handleLogin}>Login</button>
                    </div>

                    {/* login poage */}
                    <div class="login">
                        <label for="chk" aria-hidden="true">Sign Up</label>
                        <input type="text" name="txt" placeholder="User name" className='input' required="" />
                        <input type="email" name="email" placeholder="Email" required="" className='input' />
                        <input type="password" name="pswd" placeholder="Password" required="" className='input' />
                        <button className='button' onClick={handleSignUP}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
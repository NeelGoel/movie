import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './login.module.css';
import fb from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import linkedin from '../../assets/images/linkedin.png';

const Login = () => {

    const [form, changeForm] = useState({ username: '', password: '' });
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const loginUser = () => {
        if (form.username !== '' && form.password !== '') {
            navigate('/home');
        }
    }

    return (
        <div className={`${style.login_container} flex justify-content-center align-items-center`}>
            <div className={`${style.formContainer} width-50`}>
                <div className="flex justify-content-center align-items-center">
                    <span className={style.colorLogin}>LOGIN</span>
                </div>
                <div className={`width-100 mg-tp1`}>
                    <input className={`${style.username} cursor-pointer`} type="text" name="username" ref={inputRef} value={form.username} onChange={(e) => changeForm({ ...form, [e.target.name]: e.target.value })} placeholder="Enter Username" autoComplete="off" />
                </div>
                <div className={`width-100 mg-tp1`}>
                    <input className={`${style.userpassword} cursor-pointer`} type="password" name="password" value={form.password} onChange={(e) => changeForm({ ...form, [e.target.name]: e.target.value })} placeholder="Enter Password" autoComplete="off" />
                </div>
                <div className={`width-100 mg-tp1`}>
                    <button className={`width-100 ${style.btnPrimary}`} onClick={loginUser}>
                        Login
                    </button>
                </div>
                <div className={`width-100 mg-tp1 flex justify-content-around align-items-center`}>
                    <div className={style.borderLine}></div>
                    <div className={style.colorLogin}>OR</div>
                    <div className={style.borderLine}></div>
                </div>
                <div className={`width-100 mg-tp1 flex align-items-center justify-content-around`}>
                        <img className="width-5 cursor-pointer" src={fb} alt='fb'/>
                        <img className="width-5 cursor-pointer" src={google} alt='google'/>
                        <img className="width-5 cursor-pointer" src={linkedin} alt='linkedin'/>
                </div>
            </div>
            <section className="sticky">
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>

                </div>
            </section>
        </div>
    )
}

export default Login;

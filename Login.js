import React from "react";
import "./Login.scss";
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
                <div className="Login">
                    <div className="loginBoxDiv">
                        <header>Westagram</header>
                        <main>
                            <input className ="IdInput" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                            <input className="PasswordInput" type="password" placeholder="비밀번호"/>
                            <Link to="/main" style={{textDecoration: 'none'}}>
                                <button className="loginBtn">로그인</button>
                            </Link>
                        </main>
                
                        <footer>
                            <a className="forgetPw" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
                        </footer>
                    </div>
                </div>
        )
    }
}

export default Login;

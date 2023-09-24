import { getInputChangeHandler, getStyleObj } from "@/utils"


type LoginFormProps = {
    email: string;
    password: string;
    setEmail: Fn;
    setPassword: Fn;
}

export default function LoginForm(props: LoginFormProps) {
    const { email, password, setEmail, setPassword } = props
    return (
        <div className="col-1 registered-users">
            <h2>RETURNING RETAILERS</h2>
            <div className="content">
                <ul className="form-list">
                    <li className="emailBox">
                        <label htmlFor="email" className="required">Enter your email address:</label>
                        <div className="input-box">
                            <input type="text" name="login[username]" value={email} onChange={getInputChangeHandler(setEmail)} id="email" className="input-text required-entry validate-email" title="Email Address" />
                        </div>
                    </li>
                    <li className="passBox">
                        <label htmlFor="pass" className="required">Enter your password:</label>
                        <div className="input-box">
                            <input type="password" value={password} onChange={getInputChangeHandler(setPassword)} name="login[password]" className="input-text required-entry validate-password" id="pass" title="Password" />
                        </div>
                    </li>
                    <li><a href="https://www.dropshipzone.com.au/customer/account/forgotpassword/"
                        className="f-left">Forgot Password?</a></li>
                    <li>
                        <div>
                            <div id="recaptcha-demo" className="g-recaptcha"
                                data-sitekey="6LdIu-QZAAAAAPhApW40_HOiVIotVjhQUmbOf0tc"
                                data-callback="onSuccess" data-action="action">

                            </div>
                            <div className="validation-advice" style={getStyleObj("display:none;")}>This is a required
                                field.</div>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    )
}
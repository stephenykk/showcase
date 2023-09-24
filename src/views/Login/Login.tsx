import { useActions } from "@/hooks"
import { getToken } from "@/services"
import { toast, goBack, preventSubmit, goHome, createLogger } from "@/utils"
import { useCallback, useState } from "react"

import './Login.scss';
import RegistryForm from "./components/RegistryForm";
import LoginForm from "./components/LoginForm";
import FormActions from "./components/FormActions";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

const logger = createLogger('LoginPage')

function Login() {
    const [searchParams, setSearchParams] = useSearchParams()
    logger.info(searchParams, setSearchParams)
    const location = useLocation()
    logger.info('location:', location)
    const { DSZ_EMAIL: defEmail, DSZ_PASSWORD: defPassword } = import.meta.env
    const [email, setEmail] = useState(defEmail)
    const [password, setPassword] = useState(defPassword)
    const actions = useActions()

    const needReturn = searchParams.get('return') === '1'

    const handleLogin = useCallback(async () => {
        const res = await getToken(email, password)
        actions.setToken(res.token)
        actions.setUserName(email)
        sessionStorage.token = res.token; // 会话期间保存，用于初始化store的token
        toast.success('Login success', () => {
            needReturn ? goBack(-1) : goHome()
            // setSearchParams({}) // reset search params
        })
    }, [actions, email, /* setSearchParams, */ password, needReturn])



    return (
        <div className="login-page customer-account-login">
            <div className="main-container col1-layout">
                <div className="main">
                    <div className="col-main">
                        <div className="account-login">
                            <form onSubmit={preventSubmit} id="login-form">
                                <div className="col2-set form-content">
                                    <LoginForm {...{ email, password, setEmail, setPassword, handleLogin }} />
                                    <RegistryForm />
                                </div>
                                <FormActions {...{ handleLogin }} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Login
import { goUrl } from "@/utils"

type FormActionsProps = {
    handleLogin: Fn;
}
export default function FormActions(props: FormActionsProps) {
    return (
        <div className="col2-set form-action">
            <div className="col-1 registered-users">
                <div className="buttons-set">

                    <button onClick={() => props.handleLogin()} type="submit" className="button" title="Login" name="send" id="send2">
                        <span><span>LOGIN</span></span>
                    </button>

                </div>
            </div>
            <div className="col-2 new-users">
                <div className="buttons-set">
                    <button type="button" title="Create an Account" className="button" onClick={() => goUrl('https://www.dropshipzone.com.au/customer/account/create/')}>
                        <span><span>CREATE AN ACCOUNT</span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
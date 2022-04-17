import Spin from "components/Spin"
import '../Form/style.css'
const { useState } = require("react")

const Form = ({title, handleClick, isAuth}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)

    if (email === '' && pass === '') {
        isAuth = true
    }

    const handleLogin = (e) => {
        e.preventDefault()
        handleClick(email, pass)
        setActive(true)
    }


    return (
        <div className="form__wrapper">
            <div className="form__login">
                <label>
                    Email
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                </label>
                <label>
                    Пароль
                    <input
                        type='password'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="password"
                    />
                </label>
                <button
                    onClick={handleLogin}
                >
                    {title}
                </button>
            </div>
            <div className={!active ? "form__error hide" : "form__error"}>
                {
                    isAuth === false ? 'Email или пароль введены неверно' : <Spin />
                }
            </div>
        </div>
    )
}

export default Form
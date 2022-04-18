import Spin from "components/Spin"
import exit from '../../img/close_2.svg'
import { useNavigate } from "react-router-dom"

const { useState } = require("react")

const Form = ({ title, handleClick, isAuth }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

    if (email === '' && pass === '') {
        isAuth = true
    }

    const handleLogin = (e) => {
        e.preventDefault()
        handleClick(email, pass)
        setActive(true)
    }

    const closeMobMenu = () => {
        navigate('/')
    }


    return (
        <div className="form">
            <div className='exit' onClick={closeMobMenu}>
                <img src={exit} alt='Вернуться назад' width={20} height={20} />
            </div>
            <div className="form__login">
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введите Email"
                    className="input"
                />
                <input
                    type='password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Введите пароль"
                    className="input"
                />
                <button
                    onClick={handleLogin}
                    className="form__button button"
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
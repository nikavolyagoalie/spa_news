const { useState } = require("react")

const Form = ({title, handleClick, isAuth}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <span>
                {
                    isAuth && 'error'
                }
            </span>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export default Form
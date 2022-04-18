import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/index'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(true)

    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword (auth, email, password)
            .then(({user}) => {
                console.log(user)

                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                navigate('/')
            })
            .catch(
                console.error,
                setTimeout(() => {setIsAuth(false)}, 3000)
            )
    }

    return (
        <div className="popup">
            <Form
                title='Вход'
                handleClick={handleLogin}
                isAuth={isAuth}
            />
        </div>
    )
}

export default Login
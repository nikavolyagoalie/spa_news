import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/index'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(false)
    let unsuccess = isAuth

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
                unsuccess = setIsAuth(true)
            )
    }

    return (
        <Form
            title='sign in'
            handleClick={handleLogin}
            isAuth={unsuccess}
        />
    )
}

export default Login
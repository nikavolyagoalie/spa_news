//позволяет в любой точке приложения узнавать авторизован ли пользователь и узнавать какие у него есть авторизационные данные

import { useSelector } from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
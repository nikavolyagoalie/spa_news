import { useAuth } from "hooks/use-auth"

const Home = () => {

    const {isAuth, email} = useAuth()

    return isAuth ? (
        <div>
            <h1>Hello {email === 'user@user.com' ? 'user' : '' } {email === 'admin@admin.com' ? 'admin' : ''}</h1>
        </div>
    ) : (
         <h1>Hello guest</h1>
    )
}

export default Home


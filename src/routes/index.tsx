import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Register } from '../pages/register'
import { Login } from '../pages/login'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='criar-conta' element={<Register />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

export { AppRoutes }
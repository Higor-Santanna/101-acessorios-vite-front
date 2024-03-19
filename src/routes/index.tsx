import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Register } from '../pages/register'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='criar-conta' element={<Register />}></Route>
        </Routes>
    )
}

export { AppRoutes }
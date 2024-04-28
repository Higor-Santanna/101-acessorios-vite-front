import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Register } from '../pages/register'
import { Login } from '../pages/login'
import { CallCenter } from '../pages/call-center'
import { DeliveryPolicy } from '../pages/delivery-police'
import { ReturnPolicy } from '../pages/returns-policy'
import { PickupStore } from '../pages/pickup-store'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='criar-conta' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='central-de-atendimento' element={<CallCenter />}/>
            <Route path='politica-de-entrega' element={<DeliveryPolicy />}/>
            <Route path='politica-de-trocas-e-devolucoes' element={<ReturnPolicy />}/>
            <Route path='politica-retire-na-unidade' element={<PickupStore />}/>
        </Routes>
    )
}

export { AppRoutes }
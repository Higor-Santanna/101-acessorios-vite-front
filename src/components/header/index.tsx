import Logo from "../../assets/AGRIFARM.png";
import { Search } from "./components/search";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LoginAndRegister } from "./components/login-and-register";
import { MenuSandwich } from "./components/menu-sandwich";

const Header = () => {
    return (
        <>
            <header className="w-full h-36 flex justify-between items-center px-20 py-0 max-sm:px-3 bg-black text-white">
                <MenuSandwich />

                <a href="./" className="max-lg:hidden">
                    <img src={Logo} alt="logo" className="h-20 w-32"/>
                </a>

                <Search />

                <LoginAndRegister />

                <a href="" className="flex items-center gap-2 hover:underline hover:text-blue-500 max-md:hidden">
                    <FaStar className="text-2xl" />
                    <p className="text-base" >Meus Favoritos</p>
                </a>

                <a href="" className="relative">
                    <FaCartShopping className="text-2xl" />
                    <span className="inline-block text-center leading-3 w-3.5 h-3.5 bg-red-900 rounded-full text-xs absolute -top-2 -right-2">0</span>
                </a>
            </header>
        </>
    )
}

export { Header }
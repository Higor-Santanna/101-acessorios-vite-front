import { IoPerson } from "react-icons/io5";

const LoginAndRegister = () => {
    return (
        <div className="flex items-center gap-2 max-lg:hidden">
            <IoPerson className="text-2xl" />
            <div className="flex">
                <p className="text-base"><a href="" className=" hover:underline hover:text-blue-500">Entre</a> / <a href="" className=" hover:underline hover:text-blue-500">Cadastre-se</a> ou <a href="" className=" hover:underline hover:text-blue-500">Entre como usuário demo</a></p>
            </div>
        </div>
    )
}

export { LoginAndRegister }
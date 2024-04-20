

const Departments = () => {
    return(
        <div>
            <ul className="flex justify-center items-center w-full h-12 bg-gray-300 max-sm:hidden">
                <li className="list-department max-sm:hidden">
                    <a href="">Acessórios</a>
                </li>
                <li className="list-department max-sm:hidden">
                    <a href="">Iluminação</a>
                </li>
                <li className="list-department max-md:hidden">
                    <a href="">Antenas e Rádios</a>
                </li>
                <li className="list-department max-sm:hidden">
                    <a href="">Suspensão</a>
                </li>
                <li className="list-department max-sm:hidden">
                    <a href="">Rodas</a>
                </li>
                <li className="list-department max-sm:hidden">
                    <a href="">Escapamentos</a>
                </li>
                <li className="list-department max-lg:hidden">
                    <a href="">Geladeiras e Cozinhas</a>
                </li>
            </ul>
        </div>
    )
}

export { Departments }
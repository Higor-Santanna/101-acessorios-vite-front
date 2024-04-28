import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className=" w-full h-500 bg-background-desktop bg-no-repeat bg-cover flex justify-between items-center font-semibold max-sm:bg-background-mobile max-sm:h-650 max-sm:flex-col max-sm:justify-center">
                <div className="ml-28 max-lg:ml-16 max-sm:w-full max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:px-12">
                    <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-yellow-300 text-xl">Suporte</h3>
                        <a href="/central-de-atendimento" className="text-base text-white hover:underline">Central de Atendimento</a>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-yellow-300 text-xl">Segurança</h3>
                        <div className="flex flex-col gap-1">
                            <a href="/politica-de-entrega" className="text-base text-white hover:underline">Política De Entrega</a>
                            <a href="/politica-de-trocas-e-devolucoes" className="text-base text-white hover:underline">Política De Trocas E Devoluções</a>
                            <a href="/politica-retire-na-unidade" className="text-base text-white hover:underline">Política Retire Na Unidade</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-yellow-300 text-xl">Formas de Pagamentos</h3>
                        <ul className="flex gap-3 max-lg:flex-wrap">
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/kBTWRZ9G/master-card.png' alt='master-card' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/q6LMY9Q3/visa.png' alt='visa' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/hfD9jnkN/elo-2.png' alt='elo' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/4nb6sySz/itau-2.png' alt='itau' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/D4Fwx2Qh/diners.png' alt='diners' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/PNkWgY2X/americ.png' alt='americ' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/Q9cMgBTS/boleto.png' alt='boleto' className="w-14"/>
                            </li>
                            <li className="w-16 h-8 bg-white rounded flex justify-center items-center">
                                <img src='https://i.postimg.cc/MnrXzJw0/pix.png' alt='pix' className="w-14"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mr-28 w-64 max-lg:mr-16 max-sm:mr-0 max-sm:w-full max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:px-12">
                    <div className="mb-5">
                        <h3 className="text-yellow-300 text-xl mb-2">Atendimento</h3>
                        <a href="" target="_blank" className="text-base text-white w-64 h-10 bg-green-800 flex justify-center items-center text-lg rounded gap-2">
                            <FaWhatsapp />
                            Whatsapp
                        </a>
                    </div>

                    <p className="text-base text-white">Horário de atendimento:</p>
                    <p className="text-base text-white">De segunda a sexta, das 08h às 17:30h</p>
                    <p className="text-base text-white">Horário de Brasília</p>

                    <ul className="mt-5 flex justify-between max-sm:w-72">
                        <li className="w-10 h-10 bg-green-800 flex justify-center items-center rounded-full">
                            <a href="" className="text-lg text-white">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="w-10 h-10 bg-green-800 flex justify-center items-center rounded-full">
                            <a href="" className="text-lg text-white">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="w-10 h-10 bg-green-800 flex justify-center items-center rounded-full">
                            <a href="" className="text-lg text-white">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className="w-10 h-10 bg-green-800 flex justify-center items-center rounded-full">
                            <a href="" className="text-lg text-white">
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export { Footer }
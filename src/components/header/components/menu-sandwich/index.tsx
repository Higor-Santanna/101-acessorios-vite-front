import { useState } from "react";
import Logo from "../../../../assets/AGRIFARM.png"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Drawer } from "@mui/material";
import { MdMenu } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoEnterOutline } from "react-icons/io5";
import { MdEmojiPeople } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MenuSandwichDepartments } from "../../../departments/menu-sandwich-departments";

const MenuSandwich = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const openDrawer = () => setIsDrawerOpen(!isDrawerOpen)

    return (
        <>
            <button onClick={openDrawer} className="hidden max-lg:block ">
                <MdMenu className="text-2xl" />
            </button>

            <Drawer open={isDrawerOpen} variant="temporary" anchor="left"
                ModalProps={{
                    sx: {
                        backgroundColor: 'transparent',
                    },
                }}>
                <Box width="220px" height="100%" display="flex" flexDirection="column">
                    <List>
                        <div className="flex justify-between mr-2">
                            <a href="./">
                                <img src={Logo} alt="logo" className="h-10 w-16"/>
                            </a>
                            <button onClick={openDrawer} className="text-2xl">
                                <IoCloseCircle className="text-2xl" />
                            </button>
                        </div>

                        <div className="w-full h-1 bg-gray-300 mb-0.5 mt-2"/>

                        <a href="/login" className="flex gap-1 text-sm items-center px-1 py-2">
                            <IoEnterOutline />
                            <p>Acesse sua conta</p>
                        </a>
                        <a href="/criar-conta" className="flex gap-1 text-sm items-center px-1 py-2">
                            <IoPerson />
                            <p>Criar Conta</p>
                        </a>
                        <a href="" className="flex gap-1 text-sm items-center px-1 py-2">
                            <MdEmojiPeople />
                            <p>Entrar com conta demo</p>
                        </a>
                        <a href="" className="flex gap-1 text-sm items-center px-1 py-2">
                            <FaStar />
                            <p>Meus favoritos</p>
                        </a>

                        <div className="w-full h-1 bg-gray-300 mb-0.5 mt-2"/>

                        <MenuSandwichDepartments />

                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export { MenuSandwich }
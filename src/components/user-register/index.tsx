import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
// import axios from "axios"

const schemaForma = z.object({
    userData: z.object({
        name: z.string()
            .min(1, "Por favor digite seu primeiro nome")
            .max(75, "Nome limitado a 75 caracteres"),
        lastName: z.string()
            .min(1, "Por favor digite seu primeiro nome")
            .max(100, "Nome limitado a 100 caracteres"),
        email: z.string()
            .min(1, "Email inválido, falta de caracteres")
            .email("Este email não é válido")
            .max(100, "Email ultrapassou o limite de caracteres"),
        password: z.string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .max(16, "A senha não pode passar de 16 caracteres"),
        cpf: z.string()
            .min(11, "CPF inválido")
            .max(11, "CPF inválido"),
        phoneNumber: z.string()
            .min(10, "Número de telefone inválido")
            .max(11, "Número de telefone inválido"),
        confirmPassword: z.string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .max(16, "A senha não pode passar de 16 caracteres"),
        rg: z.string()
    })
})

type FormProps = z.infer<typeof schemaForma>

const UserRegister = () => {
    const [user, setUser] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForma),
        defaultValues: {
            userData: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                cpf: '',
                rg: '',
                phoneNumber: ''
            }
        }
    })

    const handleFormSubmit = (data: any) => {
        console.log(data)
        setUser(data)
    }

    return (
        <>
            {user == null ? (
                <div className="flex
                flex-col justify-between items-center h-screen w-screen">
                    <div className="w-full h-20 bg-black"></div>

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col items-center w-7/12 max-lg:w-9/12 max-sm:w-10/12 bg-gray-300 rounded py-6 gap-4">
                        <h2 className="font-semibold text-2xl">Novo Cadastro</h2>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div>
                                    <label className="text-base font-medium pr-1">Nome*</label>
                                    <input {...register('userData.name')} type="text"
                                        placeholder="Nome" required className="w-56 rounded border border-black bg-gray-300" />
                                    {errors.userData?.name?.message && (
                                        <p className="font-thin text-xs text-red-600 pl-14">Nome inválido</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-base font-medium pr-1">Sobrenome*</label>
                                    <input {...register('userData.lastName')} type="text"
                                        placeholder="Sobrenome" required className="w-56 rounded border border-black bg-gray-300" />
                                    {errors.userData?.lastName?.message && (
                                        <p className="font-thin text-xs text-red-600 pl-24">Sobrenome inválido</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div>
                                    <label className="text-base font-medium pr-1">CPF*</label>
                                    <input {...register('userData.cpf')} type="number" placeholder="CPF" required maxLength={11} className="w-56 rounded border border-black bg-gray-300" />
                                    {errors.userData?.cpf?.message && (
                                        <p className="font-thin text-xs text-red-600 pl-10">CPF inválido</p>
                                    )}

                                </div>
                                <div>
                                    <label className="text-base font-medium pr-1">RG</label>
                                    <input {...register('userData.rg')} type="number" placeholder="RG" maxLength={7} className="w-56 rounded border border-black bg-gray-300" />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium pr-1">Celular*</label>
                                <input {...register('userData.phoneNumber')} type="number" placeholder="Número do telefone com DDD" required maxLength={11} className="w-72 rounded border border-black bg-gray-300" />
                                {errors.userData?.phoneNumber?.message && (
                                    <p className="font-thin text-xs text-red-600 pl-16">Número de telefone inválido</p>
                                )}
                            </div>

                            <div>
                                <label className="text-base font-medium pr-1">E-mail*</label>
                                <input {...register('userData.email')} type="email" placeholder="E-mail" required className="w-96 rounded border border-black bg-gray-300" />
                                {errors.userData?.email?.message && (
                                    <p className="font-thin text-xs text-red-600 pl-14">Email inválido</p>
                                )}
                            </div>

                            <div>
                                <label className="text-base font-medium pr-1">Senha*</label>
                                <input {...register('userData.password')} type="password" placeholder="Senha" required className="w-60 rounded border border-black bg-gray-300" />
                                {errors.userData?.password?.message && (
                                    <p className="font-thin text-xs text-red-600 pl-14">Senha inválida</p>
                                )}
                            </div>

                            <div>
                                <label className="text-base font-medium pr-1">Confirmar Senha*</label>
                                <input {...register('userData.confirmPassword')} type="password" placeholder="Confirma Senha" required className="w-60 rounded border border-black bg-gray-300" />
                                {errors.userData?.confirmPassword?.message && (
                                    <p className="font-thin text-xs text-red-600 pl-32">Senha inválida</p>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="w-40 h-8 bg-blue-700 rounded text-white font-medium">Concluir Cadastro</button>
                    </form>
                    <div className="w-full h-20 bg-black"></div>
                </div>
            ) : (
                <div>
                    <h2>ta funcionando</h2>
                    <a href="./login">OK</a>
                </div>
            )}
        </>
    )
}

export { UserRegister }
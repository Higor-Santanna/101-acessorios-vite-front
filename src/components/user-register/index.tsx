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
    const [ user, setUser ] = useState(null)

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
                <div>
                    <h2>Novo Cadastro</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Nome*</label>
                    <input {...register('userData.name')} type="text"
                        placeholder="Nome" required />
                    {errors.userData?.name?.message && (
                        <p>Nome inválido</p>
                    )}

                    <label>Sobrenome*</label>
                    <input {...register('userData.lastName')} type="text"
                        placeholder="Sobrenome" required />
                    {errors.userData?.lastName?.message && (
                        <p>SobreNome inválido</p>
                    )}
                </div>
                <br />
                <div>
                    <label>CPF*</label>
                    <input {...register('userData.cpf')} type="number" placeholder="CPF" required maxLength={11} />
                    {errors.userData?.cpf?.message && (
                        <p>CPF inválido</p>
                    )}

                    <label>RG</label>
                    <input {...register('userData.rg')} type="number" placeholder="RG" maxLength={7} />
                </div>
                <br />
                <div>
                    <label>Celular*</label>
                    <input {...register('userData.phoneNumber')} type="number" placeholder="numero do telefone com DDD" required maxLength={11} />
                    {errors.userData?.phoneNumber?.message && (
                        <p>Número de telefone inválido</p>
                    )}
                </div>
                <br />
                <div>
                    <label>E-mail*</label>
                    <input {...register('userData.email')} type="email" placeholder="E-mail" required />
                    {errors.userData?.email?.message && (
                        <p>Email inválido</p>
                    )}
                </div>
                <br />
                <div>
                    <label>Senha*</label>
                    <input {...register('userData.password')} type="password" placeholder="Senha" required />
                    {errors.userData?.password?.message && (
                        <p>Senha inválida</p>
                    )}

                    <label>Confirmar Senha*</label>
                    <input {...register('userData.confirmPassword')} type="password" placeholder="Confirma Senha" required />
                    {errors.userData?.confirmPassword?.message && (
                        <p>Senha inválida</p>
                    )}
                </div>
                <br />
                <button type="submit">Concluir Cadastro</button>
            </form>
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
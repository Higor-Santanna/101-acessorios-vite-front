import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schemaForma = z.object({
    loginData: z.object({
        email: z.string()
            .min(1, "Email inválido, falta de caracteres")
            .email("Este email não é válido")
            .max(100, "Email ultrapassou o limite de caracteres"),
        password: z.string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .max(16, "A senha não pode passar de 16 caracteres")
    })
})

type FormProps = z.infer<typeof schemaForma>

const LoginAccess = () => {
    const { register, handleSubmit } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForma),
        defaultValues: {
            loginData: {
                email: '',
                password: ''
            }
        }
    })

    const handleFormSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="flex
        flex-col justify-between items-center h-screen w-screen">
            <div className="w-full h-20 bg-black"></div>

            <div className="flex flex-col gap-5 justify-center items-center">
                <h1 className="font-semibold text-2xl">Acesse sua Conta</h1>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-96 h-60 bg-gray-300 gap-7 items-center justify-center rounded max-sm:w-80">

                    <input {...register('loginData.email')} type="text" placeholder="Seu email" required className="w-80 rounded border border-black bg-gray-300 max-sm:w-52"/>

                    <input {...register('loginData.password')} type="text" placeholder="Sua senha" required className="w-80 rounded border border-black bg-gray-300 max-sm:w-52"/>

                    <button type="submit" className="w-40 h-8 bg-blue-700 rounded text-white font-medium">Entrar</button>
                </form>

                <div className="flex gap-1">
                    <p className="text-sm">Não tem uma conta?</p>
                    <a href="/criar-conta" className="text-sm text-blue-700 hover:underline underline-offset-1 ">Cadastra-se</a>
                </div>
            </div>
            <div className="w-full h-20 bg-black"></div>
        </div>
    )
}

export { LoginAccess }
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
               email:'',
               password:''
            }
        }
    })

    const handleFormSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <>
            <h1>Acesse sua Conta</h1>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <input {...register('loginData.email')} type="text" placeholder="Seu email" required />
                    <br />
                    <br />
                    <input {...register('loginData.password')} type="text" placeholder="Sua senha" required />
                </div>

                <button type="submit">Entrar</button>
            </form>

                <div>
                    <p>Não tem uma conta?</p>
                    <a href="/criar-conta">Cadastra-se</a>
                </div>
        </>
    )
}

export { LoginAccess }
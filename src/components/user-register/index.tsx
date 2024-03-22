import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import axios from "axios"
// import { useJwt } from "react-jwt"

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
    const { register, handleSubmit } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForma),
        defaultValues: {
            userData: {
                name:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:'',
                cpf:'',
                rg:'',
                phoneNumber:''
            }
        }
    })

    // const handleFormSubmit = async (data: FormProps) => {
    //     try {
    //         const token = generateJWTToken(data.userData.email);
    //         const response = await axios.post('https://101acessorios-api.onrender.com/user', data.userData, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Erro ao enviar requisição:', error);
    //     }+
    // }

    // const generateJWTToken = (email: string) => {
    //     const secretKey = 'sua_chave_secreta';
    //     return useJwt({ email }, secretKey, { expiresIn: '1h' }); // Token expira em 1 hora
    // }

    return (
        <>
            <h2>Novo Cadastro</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Nome*</label>
                    <input {...register('userData.name')} type="text"
                        placeholder="Nome" required />
                    <label>Sobrenome*</label>
                    <input {...register('userData.lastName')} type="text"
                        placeholder="Sobrenome" required />
                </div>
                <br />
                <div>
                    <label>CPF*</label>
                    <input {...register('userData.cpf')} type="number" placeholder="CPF" required maxLength={11} />
                    <label>RG</label>
                    <input {...register('userData.rg')} type="number" placeholder="RG" maxLength={7} />
                </div>
                <br />
                <div>
                    <label>Celular*</label>
                    <input {...register('userData.phoneNumber')} type="number" placeholder="numero do telefone com DDD" required maxLength={11} />
                </div>
                <br />
                <div>
                    <label>E-mail*</label>
                    <input {...register('userData.email')} type="email" placeholder="E-mail" required />
                </div>
                <br />
                <div>
                    <label>Senha*</label>
                    <input {...register('userData.password')} type="password" placeholder="Senha" required />
                    <label>Confirmar Senha*</label>
                    <input {...register('userData.confirmPassword')} type="password" placeholder="Confirma Senha" required />
                </div>
                <br />
                <button type="submit">Concluir Cadastro</button>
            </form>
        </>
    )
}

export { UserRegister}
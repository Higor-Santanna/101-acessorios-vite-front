import { useForm } from "react-hook-form"
import { z } from "zod"

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
        phone: z.string()
            .min(10, "Número de telefone inválido")
            .max(11, "Número de telefone inválido"),
        confirmPassword: z.string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .max(16, "A senha não pode passar de 16 caracteres"),
        rg: z.string()
            .min(9, "RG inválido")
            .max(9, "RG inválido"),
        birth: z.string()
            .min(1, "Data de nascimento errada")
            .max(8, "Data de nascimento errada"),
    })
})

const UserRegister = () => {
    const { register, handleSubmit } = useForm()

    const handleFormSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <>
            <h2>Novo Cadastro</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Nome*</label>
                    <input {...register('name')} type="text"
                        placeholder="Nome" required />
                    <label>Sobrenome*</label>
                    <input {...register('last-name')} type="text"
                        placeholder="Sobrenome" required />
                </div>
                <br />
                <div>
                    <label>CPF*</label>
                    <input {...register('cpf')} type="number" placeholder="CPF" required maxLength={11} />
                    <label>RG</label>
                    <input {...register('rg')} type="number" placeholder="RG" maxLength={7} />
                </div>
                <br />
                <div>
                    <label>Data de Nascimento*</label>
                    <input {...register('day')} type="date" placeholder="dia" required />
                </div>
                <br />
                <div>
                    <label>Celular*</label>
                    <input {...register('phone-number')} type="number" placeholder="numero do telefone com DDD" required maxLength={11} />
                </div>
                <br />
                <div>
                    <label>E-mail*</label>
                    <input {...register('e-mail')} type="email" placeholder="E-mail" required />
                </div>
                <br />
                <div>
                    <label>Senha*</label>
                    <input {...register('password')} type="password" placeholder="Senha" required />
                    <label>Confirmar Senha*</label>
                    <input {...register('confirm-password')} type="password" placeholder="Confirma Senha" required />
                </div>
                <br />
                <button type="submit">Concluir Cadastro</button>
            </form>
        </>
    )
}

export { UserRegister }
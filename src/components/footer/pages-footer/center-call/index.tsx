const CenterCall = () => {
    return (
        <>
            <h1 className="text-3xl flex justify-center items-center font-semibold text-black my-7 max-sm:text-2xl max-sm:mx-5">CENTRAL DE ATENDIMENTO AO CLIENTE</h1>

            <div className="mb-5 ml-40 text-base text-black font-medium max-md:mx-5">
                <p>
                    Horário de atendimento das unidades:
                </p>
                <p>
                    08h00 às 12h00 - 13h30 às 17h30 (Segunda a sexta-feira) e 08h00 às 12h00 (Sábado)
                </p>
            </div>

            <div className="mb-5 ml-40 text-base text-black font-medium max-md:mx-5">
                <p>Suporte E-Commerce:</p>
                <p>WhatsApp: 99 99999-9999</p>
                <p>E-mail: agrifarm@farm.com.br</p>
            </div>
        </>
    )
}

export { CenterCall }
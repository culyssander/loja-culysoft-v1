function Tabela({colunas, dados}) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        colunas.map(coluna => <td>{coluna}</td>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dados && Array.isArray(dados) && dados.length > 0 &&
                    Object.keys(dados).map(key =>   {
                        return <tr>
                            {
                                Object.keys(dados[key]).map(item => <td>{dados[key][item]}</td>)
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Tabela
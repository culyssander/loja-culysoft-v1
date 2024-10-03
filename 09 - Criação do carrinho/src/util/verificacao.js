import { useLocation } from "react-router-dom";

export const verificaInput = (input) => input.trim().length < 1

export const verificaInput2 = (input) => {
    const tipo = typeof input
    switch(tipo) {
        case "number": return input < 0
        default: verificaInput(input)
    }
}

export const formataData  = (data) => data?.split('-').reverse().join('-')

export const localizacao = () => {
    const localizacao = useLocation()
    return localizacao.pathname.split("/")[2];
}
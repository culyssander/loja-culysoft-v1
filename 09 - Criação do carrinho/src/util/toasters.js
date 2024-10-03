import { toast } from "react-toastify";

const config = {
    className: 'foo-bar',
    autoClose: 2000,
    pauseOnHover: false,
    position: 'top-right'
}

export const toastSucesso = (mensagem) => toast.success(mensagem, config)
export const toastInformacao = (mensagem) => toast.info(mensagem, config)
export const toastAlerta = (mensagem) => toast.warn(mensagem, config)
export const toastErro = (mensagem) => toast.error(mensagem, config)



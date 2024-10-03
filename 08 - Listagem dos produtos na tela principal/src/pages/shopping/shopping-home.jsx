import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ShoppingMenu from "../../components/shopping/shopping-menu";
import ShoppingProdutoItem from "../../components/shopping/shopping-produto-item";
import { buscaTodosProdutos } from "../../redux/slice/produtos-slice";

import './styles/shopping-home.css';

function ShoppingHome() {

    const dispatch = useDispatch()
    const [produtos, setProdutos] = useState([])
    
    useEffect(() => {
        dispatch(buscaTodosProdutos()).then(data => setProdutos(data.payload))
    }, [dispatch])

    function onSubmit() {
        console.log("Clicou no botao");
        
    }

    return (
        <div>
            <ShoppingMenu/>
            
            <div className="shopping-home">
                {
                    produtos.map(produto => <ShoppingProdutoItem produto={produto}/>)
                }
            </div>
        </div>
    )
}

export default ShoppingHome
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h1>Ops! página não encontrada :( </h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Erro;
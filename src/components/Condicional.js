import { useState } from "react"

function Condicional(){
    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limaparEmail(){
        setUserEmail('')
    }
    
    return(
        <div className="App">
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
            </form>
            {userEmail && (
                <div>
                    <p>o email do usuario e {userEmail}</p>
                    <button onClick={limaparEmail}>Limpar email</button>
                </div>
            )}
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
        </div>
    )
}

export default Condicional
function Saudacao ({nome}) {
    function GerarSaudacao(algumNome){
        return `Ola ${algumNome} , tudo bem`
    }

    return (
        <>
          {nome && <p>{GerarSaudacao(nome)}</p>  }
        </>
    )
}

export default Saudacao
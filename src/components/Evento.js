
function Evento({numero}) {
    function meuEvento(){
        console.log(`Opa fui ativado ${numero}`)
    }
    return (
        <div className="App">
            <p>Clique para ativar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
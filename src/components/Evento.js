import Button from './evento/Button.js'
function Evento() {
    function meuEvento(){
        console.log(`Ativando primeiro evento`)
    }

    function SegundoEvento(){
        console.log("Ativando o segundo evento")
    }

    return (
        <div className="App">
            <p>Clique para ativar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={SegundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento
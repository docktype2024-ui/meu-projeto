import Item from './Item.js'
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Reanult" ano_lancamento={1964}/>
            </ul>
        </>
    )
}

export default List

function Lista(props) {
    return <li>{props.nome} - {props.preço}</li>;
}

function Suplementos() {
    const sup = [
        { id: 1, nome: "Whey concentrado", preço: "R$ 99,90" },
        { id: 2, nome: "Creatina", preço: "R$ 79,90" },
        { id: 3, nome: "Pré-Treino Haze", preço: "R$ 103,50" },
        { id: 4, nome: "Thermogênico", preço: "R$ 59,90" }
    ];
    
    const prod = [
        { id: 1, nome: "Coqueteleira", preço: "R$ 15,00" },
        { id: 2, nome: "Camisa Growth", preço: "R$ 36,00" },
        { id: 3, nome: "Regata Growth", preço: "R$ 24,50" },
        { id: 4, nome: "Straps", preço: "R$ 50,90" }
    ];

    return (
        <>  
            <h2>Produtos Growth</h2>
            <h3>Suplementos</h3>
            <ul>
                {sup.map((item) => <Lista key={item.id} nome={item.nome} preço={item.preço} />)}
            </ul>
            <h3>Consumíveis</h3>
            <ul>
                {prod.map((item) => <Lista key={item.id} nome={item.nome} preço={item.preço} /> )}
            </ul>
        </>
    );
}


export default Suplementos



function Mostrar(props) {
    return <li>Aluno {props.nome}, Cursando {props.curso}, número de Matrícula {props.matricula}</li>;
}

function Alunos() {
    const alun = [
        { id: 1, nome: "Guilherme", curso: "Análise e Desenvolvimento de Sistemas", matricula: 2314290112 },
        { id: 2, nome: "Lucas", curso: "Medicina", matricula: 2318980340 },
        { id: 3, nome: "Juann", curso: "Odontologia", matricula: 2245679012 },
        { id: 4, nome: "Mariana", curso: "Psicologia", matricula: 2590445009 },
        { id: 5, nome: "Carol", curso: "Moda", matricula: 2009565999 },
        { id: 6, nome: "Jonas", curso: "Engenharia", matricula: 2011327667 }
    ];

    return (
        <>
            <h2>Alunos IESB</h2>
            <ul>
            {alun.map((A) => <Mostrar key={A.id} nome={A.nome} curso={A.curso} matricula={A.matricula} /> )}
            </ul>
        </>
    )

}

export default Alunos
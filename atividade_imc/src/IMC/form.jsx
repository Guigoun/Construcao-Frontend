import { useState } from 'react';

function Calcular() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(null);

    const calcularIMC = () => {
        if (altura > 0 && peso > 0) {
            const imc = peso / ((altura / 100) ** 2); // altura em metros
            setResultado(imc);
        } else {
            setResultado(null);
        }
    };

    return (
        <>
            <h1>Descubra seu Índice de Massa Corporal (IMC)</h1>
            <form onSubmit={(e) => { e.preventDefault(); calcularIMC(); }}>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder='Altura (cm)'
                />
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder='Peso (kg)'
                />
                <button type="submit">Calcular IMC</button>
            </form>
            {resultado !== null && <h2>Seu IMC é: {resultado.toFixed(2)}</h2>}
        </>
    );
}

export default Calcular;
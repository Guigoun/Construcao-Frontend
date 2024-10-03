import { useState } from 'react';

function MultipleForm() {
  const [inputs, setInputs] = useState({
    comida: '',
    animal: '',
    cinema: '',
    city: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2)); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Qual sua comida favorita?
        <input 
          type="text" 
          name="comida" 
          value={inputs.comida} 
          onChange={handleChange}
        />
      </label>
      <br />
      
      <label>
        Qual seu animal favorito?
        <input 
          type="text" // Mudança para 'text' para aceitar nomes de animais
          name="animal" 
          value={inputs.animal} 
          onChange={handleChange}
        />
      </label>
      <br />
      
      <label>
        Você gosta de cinema? (responda "sim" ou "não")
        <input 
          type="text" // Mudança para 'text' para resposta "sim" ou "não"
          name="cinema" 
          value={inputs.cinema} 
          onChange={handleChange}
        />
      </label>
      <br />
      
      <label>
        Qual cidade você mora?
        <input 
          type="text" 
          name="city" 
          value={inputs.city} 
          onChange={handleChange}
        />
      </label>
      <br />
      
      <input type="submit" />
    </form>
  );
}

export default MultipleForm
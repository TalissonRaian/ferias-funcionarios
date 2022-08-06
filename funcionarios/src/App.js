
import './App.css';
import FichaFuncionarios from './componentes/FichaFuncionarios';

function App() {

  const fichas = [
    {id:1, name:"Luan", cargo:"Auxiliar", matricula:"2039293", ferias:false},
    {id:2, name:"Carlos", cargo:"Auxiliar", matricula:"521293", ferias:true},
    {id:3, name:"Robert", cargo:"Auxiliar", matricula:"940283", ferias:false}
]


  return (
    <div className="App">
      <div className='card__geral'>
        <h1 className='titulo'>Ferias - Funcionarios</h1>
        
        
          <FichaFuncionarios id={4} name={"Talisson"} cargo={"Auxiliar"} matricula={"291022"} ferias={false} />
          <FichaFuncionarios id={5} name={"Mateus"} cargo={"Gerente"} matricula={"621022"} ferias={true} />
          <FichaFuncionarios id={6} name={"Elton"} cargo={"Supervisor"} matricula={"223942"} ferias={false} />
          {fichas.map((colaborador)=>
          <FichaFuncionarios
          name={colaborador.name}
          cargo={colaborador.cargo}
          ferias={colaborador.ferias}
          matricula={colaborador.matricula}
          />
          )}
          
      </div>
    </div>
  );
}

export default App;

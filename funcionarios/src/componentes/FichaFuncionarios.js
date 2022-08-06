/* eslint-disable no-mixed-operators */

const FichaFuncionarios = ({name, cargo, ferias, matricula}) => {
    


  return (
    <div >
        <ul className='card__ferias'>
            <li className='lista__ferias'>Nome: {name}</li>
            <li className='lista__ferias'>Cargo: {cargo}</li>
            <li className='lista__ferias'>Matricula: {matricula}</li>
            <li className='lista__ferias'> {ferias && <p className='ferias__vencida'>  Agendar Ferias</p> || <p className='ferias__agendar'>Ferias em dias</p>}</li>  
        </ul>
        
    </div>
  )
}

export default FichaFuncionarios
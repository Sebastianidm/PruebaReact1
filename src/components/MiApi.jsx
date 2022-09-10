import React from 'react'
import { useState, useEffect } from 'react'
import Personajes from './Personajes';


const MiApi = () => {
//Estados y funcion de estados
const [info, setInfo] = useState([])
const [pagina, setPagina] = useState(1)
const [inputBusqueda, setInputBusqueda] = useState("")



//FUNCION PARA ORDENAR ALFABETICAMENTE

function compareName (a,  b) {
  if ( a.name.toLowerCase() < b.name.toLowerCase()){
    return -1;
  }
  if ( a.name.toLowerCase() > b.name.toLowerCase()){
    return 1;
  }
  return 0;
  
}
info.sort(compareName)




useEffect( () => {
//UseEffect con la funcion que llama a la API
    consultarInformacion();
}, [pagina]);

//Funcion async para pedir datos a una API
const consultarInformacion = async () => {
    const url = (`https://rickandmortyapi.com/api/character/?page=${pagina}`); //${Para cambiar con el estado y no sea estatico }
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data.results)
  
    
}







  return (
    
    <div className='container p-1 '>
      
      <h1 className='text-dark'>Buscar personaje</h1>
            <input type="text"
              placeholder='Busca un personaje'
              className='form-control' 
              onChange={e=> setInputBusqueda(e.target.value)} />
              <br />

      <Nav  className="headerStyle" pagina={pagina} setPagina={setPagina}/>
      <div className="row">
        {/* Filtro para encontrar personajes */}
      {info.filter((val) =>{
       if(inputBusqueda == ""){
         return val
       }else if (val.name.toLowerCase().includes(inputBusqueda.toLowerCase())){
         return val
       }
      //  Map para recorer el array de objetos
      }).map( (info) => {
            return (
             <div className="col-md-3" key={info.id}>
               <Personajes  info={info} />
             </div>
            )
          })



      }
      </div>
      <Nav  pagina={pagina} setPagina={setPagina}/>
    </div>
  )
}

// Navbar a base de props para pasar a la siguiente pagina o volver a la anterior
function Nav(props) {
  return (
    <header className='headerStyle d-flex justify-content-between align-items-center' >
      <h3>Pagina:{props.pagina}</h3>
      <div>
      <button className='btn btn-light m-1'
        onClick={() => 
          props.setPagina(props.pagina - 1)
        }
        >
        Pagina: {props.pagina - 1}
      </button>

      <button className='btn btn-light'
        onClick={() => 
          props.setPagina(props.pagina + 1)
        }
        >
        Pagina: {props.pagina + 1}
      </button>
      </div>


    </header>
  )
}




export default MiApi
import './index.css'
import { Link } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext';


function App() {

  const {getUser, signOut} = useAuth()

  function cerrarSesionHandler(){
    signOut().then(()=>alert("Sesión Cerrada!")).catch((e)=>{alert(`Se produjo un error ${e.code} - ${e.message}`)})
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 h-screen flex flex-col items-start">
        <div className="flex flex-col w-3/5 rounded overflow-hidden shadow-lg m-16 ms-40 p-4">
          <div className="px-6 py-4">
          <div className="font-bold text-7xl mb-2  text-opacity-85 font-Revalia text-purple-700">Bienvenido al cliente de SpaceTraders!</div>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-col m-11">
        {getUser() == null ? 
          <Link to={"/login"} className='text-xl font-medium text-primary-600 hover:underline dark:text-gray-200'>Ir al login</Link> 
          : 
          <button onClick={cerrarSesionHandler} className="text-lime-700 w-1/6 self-center bg-primary-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-base px-5 py-2.5 text-center">Cerrar Sesión</button>
        }  
        </div>
      </div>
      </div>     
    </>
  )
}

export default App

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useBackendAPI } from "./contexts/BackendAPIContext";
import { useEffect, useState } from "react";
import { Agent } from "./models/APIResp/Agent";
import NavBar from "./NavBar";

export default function Home() {
    const { signOut, currentUser } = useAuth();
    const navigate = useNavigate();
    const [agents, setAgents] = useState([] as Agent[])
    const {registerAgent, currentAgent, updateCurrentAgent, getAgentsForUser, flushCurrentAgent} = useBackendAPI();

    useEffect(
        ()=>{
            getAgentsForUser(currentUser?.uid).then(
                agents => setAgents(agents)
            ).catch(
                error => console.error(error)
            )
        }
        ,[currentAgent, currentUser])

    function changeAgent(agent: Agent){
        updateCurrentAgent(agent);
        alert("Seleccionado el agente " + agent.symbol + " !")
    }

    function registrarNuevoAgente(){

        if(!currentUser){
            alert("Ningún usuario logeado!");
            return;
        }

        let nombreAgente = prompt("Ingrese nombre del agente");
        let faccionAgente = prompt("Ingrese facción del agente","cosmic");

        if(nombreAgente==null || faccionAgente==null){
            alert("Los campos no pueden estar vacios!");
            return;
        }

        registerAgent(nombreAgente,faccionAgente,currentUser.uid).then(
            respData => {
                alert(`Registrado el agente ${respData.agent.symbol}`)
                updateCurrentAgent(respData.agent);
            }
        ).catch(
            err=>alert(err)
        )

    }

    function cerrarSesionHandler() {
        signOut()
            .then(() => {
                flushCurrentAgent()
                alert("Sesión Cerrada!");
                navigate("/");
            })
            .catch((e) => {
                alert(`Se produjo un error ${e.code} - ${e.message}`);
            });
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 flex flex-row items-center ms-24">


                    <div className="flex flex-col w-2/5 h-3/4 rounded border-purple-700 border-4 p-8 justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                                ¡ Bienvenido viajero !
                            </h2>

                            <p className="text-white text-xl font-Revalia">
                                La aventura te espera, explora cada esquina de
                                la galaxia inexploradas, completa misiones
                                y extrae minerales para mejorar tu nave
                            </p>
                        </div>
                        <button
                        onClick={registrarNuevoAgente}
                        className="rounded border-lime-700 border-4 text-white font-Revalia hover:border-lime-800 hover:text-gray-200 text-center px-2 py-4">
                            Nuevo Agente
                        </button>
                        

                        <button
                            onClick={cerrarSesionHandler}
                            className="rounded border-lime-700 border-4 text-white font-Revalia hover:border-lime-800 hover:text-gray-200 text-center px-2 py-4"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                    <div className="h-3/4 ms-5 mt-3">
                        <h3 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">Agentes:</h3>
                        <div className="grid grid-cols-4 grid- gap-2">
                            {agents?.map(
                                (agent)=>{
                                    return <button 
                                            key={crypto.randomUUID() as unknown as string} 
                                            onClick={()=>changeAgent(agent)} 
                                            className="text-lime-300 h-11 rounded-md border border-lime-600 text-center p-1"
                                            >
                                                {agent.symbol}
                                            </button>
                                }
                            )}
                        </div>
                    </div>
                </div>

                <NavBar activeButton="Inicio"></NavBar>

                <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                    <img
                        src="./src/assets/img/landingPage2.png"
                        alt="background"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </>
    );
}

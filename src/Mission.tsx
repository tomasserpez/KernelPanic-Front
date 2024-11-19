import NavBar from "./NavBar";
import { useBackendAPI } from "./contexts/BackendAPIContext";
import { Contract } from "./models/APIResp/Contract";
import { useEffect, useState } from "react";


function ContratoItem({contract, onAccept} : { contract : Contract, onAccept:any}) {
    function acceptHandler(e:any){
        e.stopPropagation();
        onAccept();
    }

    return <div className="flex flex-col rounded border-purple-700 border bg-black p-2 max-w-fit">
        <p className="text-white text-base font-Revalia">ID: {contract.id}</p>
        <p className="text-white text-base font-Revalia">Faccion: {contract.factionSymbol}</p>
        <p className="text-white text-base font-Revalia">Fecha límite aceptación: {new Date(contract.deadlineToAccept).toLocaleDateString()}</p>
        <div>
        <p className="text-white text-base font-Revalia">Carga:</p>
        
            {contract.terms.deliver.map((cargo) => <div key={crypto.randomUUID() as unknown as string}>
                                                    <p className="text-white text-base font-Revalia">&emsp;&emsp;Trade Symb: {cargo.tradeSymbol}</p>
                                                <ul>
                                                    <li className="text-white text-base font-Revalia">&emsp;&emsp;&emsp;Destino: {cargo.destinationSymbol}</li>
                                                    <li className="text-white text-base font-Revalia">&emsp;&emsp;&emsp;Unid. req.: {cargo.unitsRequired}</li>
                                                    <li className="text-white text-base font-Revalia">&emsp;&emsp;&emsp;Unid. pago: {cargo.unitsFulfilled}</li>
                                                </ul></div>)}
            
        </div>
        <p className="text-white text-base font-Revalia">Tipo: {contract.type}</p>
        <p className="text-white text-base font-Revalia">Aceptado: {contract.accepted?"SÍ":"NO"}</p>
        <p className="text-white text-base font-Revalia">Completado: {contract.fulfilled?"SÍ":"NO"}</p>
        { !contract.accepted ? 
        <button onClick={acceptHandler} 
                className="self-center w-1/3 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 font-Revalia" 
            >
            Aceptar
        </button> :
        <button onClick={e=>e.stopPropagation()} className="self-center w-1/3 text-slate-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-5 py-2.5 text-center bg-primary-600 font-Revalia">
            Aceptar
        </button> 
        }
        <svg className="self-end me-3" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
    </div>
}

function ContratoResumen({contract} : { contract : Contract}){
    return <div className="flex flex-col bg-black rounded border-purple-700 border p-2 max-w-fit">
        <p className="text-white text-base font-Revalia">ID: {contract.id}</p>
        <p className="text-white text-base font-Revalia">Faccion: {contract.factionSymbol}</p>
        <p className="text-white text-base font-Revalia">Fecha límite aceptación: {new Date(contract.deadlineToAccept).toLocaleDateString()}</p>
        <p className="text-white text-base font-Revalia">Tipo: {contract.type}</p>
        <p className="text-white text-base font-Revalia">Aceptado: {contract.accepted?"SÍ":"NO"}</p>
        <p className="text-white text-base font-Revalia">Completado: {contract.fulfilled?"SÍ":"NO"}</p>
        <svg className="self-end me-3" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
    </div>
}

function ContratoWrapper({contract, isActive, onClick, onAccept} : { contract : Contract, isActive : boolean, onClick : any, onAccept:any}){
    
    return <div onClick={onClick} className="p-2 max-w-fit">{isActive?<ContratoItem contract={contract} onAccept={onAccept}></ContratoItem>:<ContratoResumen contract={contract}></ContratoResumen>}</div>
}

export default function Mission() {

    const {getContracts, currentAgent, acceptContract} = useBackendAPI();
    const [agentContracts, setAgentContracts] = useState([] as Contract[])
    const [activeItem, setActiveItem] = useState(-1);

    function toggleActiveItem(n : number){
        if(activeItem == n){
            setActiveItem(-1);
        }else{
            setActiveItem(n);
        }
    }

    function acceptContractHandler(contract : Contract){
        acceptContract(contract).then(
            (cont)=>{
                alert(`Contrato ${cont.id} aceptado!`)
                getAgentContracts();
            }
        ).catch(
            (error)=>console.error(error)
        );
    }

    function getAgentContracts(){
        getContracts().then(
            contracts => setAgentContracts(contracts)
        ).catch(error=>console.error(error))
    }

    useEffect(()=>{
        getAgentContracts();
    }, [currentAgent])

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 w-full flex items-center ps-11">
                    <div className="flex flex-col w-4/5 h-3/4 ms-11 rounded border-purple-700 border-4 p-8">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                                Contratos!
                            </h2>
                            {agentContracts.map(
                                (agentContract, index) => <ContratoWrapper key={index} onAccept={()=>acceptContractHandler(agentContract)} contract={agentContract} isActive={index == activeItem} onClick={()=>toggleActiveItem(index)}></ContratoWrapper>
                            )}
                        </div>
                    </div>
                </div>

                <NavBar activeButton="Misiones"></NavBar>

                <div className="h-screen w-screen absolute top-0 bottom-0 -z-10">
                    <img
                        src="./src/assets/img/landingPage4.png"
                        alt="background"
                        className="h-full w-full"
                    />
                </div>
            </div>
        </>
    );
}

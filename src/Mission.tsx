import NavBar from "./NavBar";
import { useBackendAPI } from "./contexts/BackendAPIContext";
import { Contract } from "./models/APIResp/Contract";
import { useEffect, useState } from "react";


function ContratoItem({contract} : { contract : Contract}) {
    return <div>
        <p className="text-white text-xl font-Revalia">Faccion: {contract.factionSymbol}</p>
        <p className="text-white text-xl font-Revalia">Fecha límite aceptación: {contract.deadlineToAccept}</p>
        <div>
        <p className="text-white text-xl font-Revalia">Carga:</p>
            {contract.terms.deliver.map((cargo,index) => <div key={crypto.randomUUID() as unknown as string}>
                                                    <p className="text-white text-xl font-Revalia">Trade Symb: {cargo.tradeSymbol}</p>
                                                <ul>
                                                    <li className="text-white text-xl font-Revalia">Destino: {cargo.destinationSymbol}</li>
                                                    <li className="text-white text-xl font-Revalia">Unid. req.: {cargo.unitsRequired}</li>
                                                    <li className="text-white text-xl font-Revalia">Unid. pago: {cargo.unitsFulfilled}</li>
                                                </ul></div>)}
            
        </div>
        <p className="text-white text-xl font-Revalia">Tipo: {contract.type}</p>
        <p className="text-white text-xl font-Revalia">Aceptado: {contract.accepted?"SÍ":"NO"}</p>
        <p className="text-white text-xl font-Revalia">Completado: {contract.fulfilled?"SÍ":"NO"}</p>
        
    </div>
}

export default function Mission() {

    const {getContracts, currentAgent} = useBackendAPI();
    const [agentContracts, setAgentContracts] = useState([] as Contract[])

    useEffect(()=>{
        getContracts().then(
            contracts => {setAgentContracts(contracts); console.log(contracts)}
        ).catch(error=>console.error(error))
    }, [currentAgent])

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="h-3/4 flex items-center justify-around">
                    <div className="flex flex-col items-center w-2/5 h-3/4">
                        <p className="text-4xl text-white font-Revalia">
                            Space Traders
                            <span className="text-5xl text-center block font-Revalia">
                                Game
                            </span>
                        </p>
                        <img
                            src="./src/assets/img/logoSpaceTraders.png"
                            alt="logo"
                            className="h-3/6"
                        />
                    </div>

                    <div className="flex flex-col w-2/5 h-3/4 rounded border-purple-700 border-4 p-8 justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-2xl mb-2 font-Revalia text-lime-700">
                                Contratos!
                            </h2>
                            {agentContracts.map(
                                (agentContract) => <ContratoItem key={crypto.randomUUID() as unknown as string} contract={agentContract}></ContratoItem>
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

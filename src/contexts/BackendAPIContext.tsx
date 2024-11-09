import { useContext, createContext, useState} from "react";
import { Agent } from "../models/APIResp/Agent";
import { RegisterData } from "../models/APIResp/RegisterData";
import { Contract } from "../models/APIResp/Contract";

interface BackendAPIContextType {
    currentAgent : Agent,
    updateCurrentAgent : (agent : Agent) => void
    getAgents : ()=>Promise<Agent[]>,
    registerAgent : (name: string, faction: string) => Promise<RegisterData>,
    getContracts : () => Promise<Contract[]>
}
const BackendAPIContext = createContext({} as BackendAPIContextType);

export function useBackendAPI() {
  return useContext(BackendAPIContext);
}

export function BackendAPIProvider({ children } : { children : any }) {

  const [serverPort, setServerPort] = useState("8080");
  const [serverBaseURL, setServerBaseURL] = useState("http://localhost:");
  const [currentAgent, setCurrentAgent] = useState({} as Agent);

  const backendEndpoints = {
    getAgents: "/agents",
    postRegisterAgent: "/agents/register",
    getAgentByName: "/agents/name/:name",
    getAgentByToken: "/agents/token/:token",
    getContracts: "/:agentName/contracts",
    postAcceptContract: ":agentName/contracts/:contractId/accept"

  }

  function updateCurrentAgent(newAgent : Agent){
    setCurrentAgent(newAgent);
  }

  async function getAgents() : Promise<Agent[]>{
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getAgents}`);
    const agents = await res.json() as Agent[];
    return agents;
  }

  async function registerAgent(name:string,faction:string) : Promise<RegisterData> {
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.postRegisterAgent}`, 
                    {   
                        method: "POST",
                        body: JSON.stringify({username:name, faction: faction})
                    } );
    const agent = await res.json() as RegisterData;
    return agent;
  }

  async function getContracts() : Promise<Contract[]>{
    const parsedEndpoint = backendEndpoints.getContracts.replace(":agentName", currentAgent.symbol);
    const res = await fetch(`${serverBaseURL}${serverPort}${parsedEndpoint}`);
    const contracts = await res.json() as Contract[];
    return contracts;
  }
    

  const value = {
    currentAgent,
    getAgents,
    registerAgent,
    getContracts,
    updateCurrentAgent
  }

  return (
    <BackendAPIContext.Provider value={value}>
      { children }
    </BackendAPIContext.Provider>
  )

}

export default BackendAPIProvider
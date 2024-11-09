import { useContext, createContext, useState} from "react";
import { Agent } from "../models/APIResp/Agent";
import { RegisterData } from "../models/APIResp/RegisterData";
import { Contract } from "../models/APIResp/Contract";

interface BackendAPIContextType {
    getAgents : ()=>Promise<Agent[]>,
    registerAgent : () => Promise<RegisterData>,
    getContracts : () => Promise<Contract[]>
}
const BackendAPIContext = createContext({} as BackendAPIContextType);

export function useBackendAPI() {
  return useContext(BackendAPIContext);
}

export function BackendAPIProvider({ children } : { children : any }) {

  const [serverPort, setServerPort] = useState("8080");
  const [serverBaseURL, setServerBaseURL] = useState("http://localhost:");

  const backendEndpoints = {
    getAgents: "/agents",
    postRegisterAgent: "/agents/register",
    getAgentByName: "/agents/name/:name",
    getAgentByToken: "/agents/token/:token",
    getContracts: "/:agentName/contracts",
    postAcceptContract: ":agentName/contracts/:contractId/accept"

  }

  async function getAgents() : Promise<Agent[]>{
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getAgents}`);
    const agents = await res.json() as Agent[];
    return agents;
  }

  async function registerAgent() : Promise<RegisterData> {
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.postRegisterAgent}`);
    const agent = await res.json() as RegisterData;
    return agent;
  }

  async function getContracts() : Promise<Contract[]>{
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getContracts}`);
    const contracts = await res.json() as Contract[];
    return contracts;
  }
    

  const value = {
    getAgents,
    registerAgent,
    getContracts
  }

  return (
    <BackendAPIContext.Provider value={value}>
      { children }
    </BackendAPIContext.Provider>
  )

}

export default BackendAPIProvider
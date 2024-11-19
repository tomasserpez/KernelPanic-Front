import { useContext, createContext, useState} from "react";
import { Agent } from "../models/APIResp/Agent";
import { RegisterData } from "../models/APIResp/RegisterData";
import { Contract } from "../models/APIResp/Contract";

interface BackendAPIContextType {
    currentAgent : Agent,
    updateCurrentAgent : (agent : Agent) => void
    getAllAgents : ()=>Promise<Agent[]>,
    getAgentsForUser : (uid:string)=>Promise<Agent[]>,
    registerAgent : (name: string, faction: string, uid:string) => Promise<RegisterData>,
    getContracts : () => Promise<Contract[]>,
    flushCurrentAgent : ()=>void,
    acceptContract: (contract : Contract) => Promise<Contract>
}
const BackendAPIContext = createContext({} as BackendAPIContextType);

export function useBackendAPI() {
  return useContext(BackendAPIContext);
}

export function BackendAPIProvider({ children } : { children : any }) {

  const [serverPort, setServerPort] = useState("8080");
  const [serverBaseURL, setServerBaseURL] = useState("http://localhost:");
  const [currentAgent, setCurrentAgent] = useState(JSON.parse(localStorage.getItem("currentAgent") || "{}") as Agent);

  const backendEndpoints = {
    getAllAgents: ()=>"/agents",
    getAgentsForUser: (uid: string)=>"/agents/:uid".replace(":uid",uid),
    postRegisterAgent: (uid : string)=>"/agents/register/:uid".replace(":uid",uid),
    getAgentByName: (name: string)=>"/agents/name/:name".replace(":name",name),
    getAgentByToken: (token:string)=>"/agents/token/:token".replace(":token",token),
    getContracts: (agentName :string)=>"/:agentName/contracts".replace(":agentName",agentName),
    postAcceptContract: (agentName :string, contractId:string) => 
                        "/:agentName/contracts/:contractId/accept"
                        .replace(":agentName",agentName)
                        .replace(":contractId", contractId)

  }

  function updateCurrentAgent(newAgent : Agent){
    localStorage.setItem("currentAgent",JSON.stringify(newAgent))
    setCurrentAgent(newAgent);
  }

  function flushCurrentAgent(){
    localStorage.setItem("currentAgent","");
    setCurrentAgent({} as Agent);
  }

  async function getAgentsForUser(uid:string | null) : Promise<Agent[]>{
    if(uid == null){
      return [];
    }
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getAgentsForUser(uid)}`);
    const agents = await res.json() as Agent[];
    return agents;
  }

  async function getAllAgents() : Promise<Agent[]>{
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getAllAgents()}`);
    const agents = await res.json() as Agent[];
    return agents;
  }

  async function registerAgent(name:string,faction:string, uid:string) : Promise<RegisterData> {
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.postRegisterAgent(uid)}`, 
                    {   
                        method: "POST",
                        body: JSON.stringify({username:name, faction: faction})
                    } );
    const agent = await res.json() as RegisterData;
    return agent;
  }

  async function getContracts() : Promise<Contract[]>{
    if(!currentAgent.symbol){
      return [];
    }
    const res = await fetch(`${serverBaseURL}${serverPort}${backendEndpoints.getContracts(currentAgent.symbol)}`);
    const contracts = await res.json() as Contract[];
    return contracts;
  }

  async function acceptContract(contract : Contract) : Promise<Contract> {
    if(!currentAgent.symbol || !contract?.id){
      return {} as Contract;
    }
    const res = await fetch(
      `${serverBaseURL}${serverPort}${backendEndpoints.postAcceptContract(currentAgent.symbol,contract.id)}`,
      {
        method: "POST"
      });
    const contractRes = await res.json() as {agent: Agent, contract: Contract};
    return contractRes.contract;
  }
    

  const value = {
    currentAgent,
    getAllAgents,
    registerAgent,
    getContracts,
    updateCurrentAgent,
    getAgentsForUser,
    flushCurrentAgent,
    acceptContract
  }

  return (
    <BackendAPIContext.Provider value={value}>
      { children }
    </BackendAPIContext.Provider>
  )

}

export default BackendAPIProvider
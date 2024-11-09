import { Agent } from "./Agent";
import { Contract } from "./Contract";

export interface RegisterData{
    token : string,
    agent : Agent,
    contract : Contract
}
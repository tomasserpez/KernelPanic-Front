export interface Contract{
    id: string,
    factionSymbol : string,
	type : string,
	terms : Terms,
	accepted : boolean,
	fulfilled : boolean,
	expiration : string,
	deadlineToAccept : string
}

interface Terms{
    deadline : string,
    payment :  ContractPayment,
    deliver: ContractCargo[]
}

interface ContractPayment{
    onAccepted: number,
    onFulfilled: number
}

interface ContractCargo{
    tradeSymbol: string,
    destinationSymbol: string,
    unitsRequired: number,
    unitsFulfilled: number
}
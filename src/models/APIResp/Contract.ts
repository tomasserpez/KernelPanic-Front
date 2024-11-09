export interface Contract{
    factionSymbol : string,
	type : string,
	terms : string,
	accepted : Terms,
	fulfilled : boolean,
	expiration : boolean,
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

    
export class TradeRequestDto {

    id: string;
    tradeReference: string;
    tradeState: string;
    buyCurrency?: string;
    buyAmount?: number;
    sellCurrency: string;
    client: string;
    paymentType: string;
    buyClientBalanceId: number;
    sellClientBalanceId: number;
    settlementType: string;
    channel: string;
    requestedAccountType: string;
    requestedValueDate: number;
    orderCreatedDate: Date;
    potentialProfit: string;
    realisedProfit: string;
    isActive: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}
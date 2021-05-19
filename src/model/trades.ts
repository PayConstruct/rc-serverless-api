// import { Document, Schema as MongooseSchema } from 'mongoose';
import mongoose from 'mongoose';

/*
export class Trade extends Document {
    
    
    id: string;

    tradeReference: string;
    
    
    tradeState: string;
   
    
    buyCurrency?: string;
   
    
    buyAmount?: number;

    
    sellCurrency: string;
   
    
    buySellIndicator: string;
   
    
    client: string;

    
    paymentType: string;
   
    
    buyClientBalanceId: string;
   
    
    sellClientBalanceId: string;
   
    
    settlementType: string;

    
    channel: string;

    
    requestedAccountType: string;
    
    
    requestedValueDate: string;
    
    
    orderCreatedDate: Date;

    
    potentialProfit: string;

    
    realisedProfit: string;

    
    isActive: boolean;
	
    
    createdBy: string;
    
    createdAt: Date;

    
    updatedBy: string;
    
    
    updatedAt: Date;
}
*/

export type TradeDocument = mongoose.Document & {
    id: string,
tradeReference: string,
tradeState: string,
buyCurrency?: string,
buyAmount?: number,
sellCurrency: string,
buySellIndicator: string,
client: string,
paymentType: string,
buyClientBalanceId: string,
sellClientBalanceId: string,
settlementType: string,
channel: string,
requestedAccountType: string,
requestedValueDate: string,
orderCreatedDate: Date,
potentialProfit: string,
realisedProfit: string,
isActive: boolean,
createdBy: string,
createdAt: Date,
updatedBy: string,
updatedAt: Date,
  };
  
  const tradeSchema = new mongoose.Schema({
    id: { type: Number, index: true, unique: true },
    tradeReference: String,
    tradeState: String,
    buyCurrency: String,
    buyAmount: Number,
    sellCurrency: String,
    buySellIndicator: String,
    client: String,
    paymentType: String,
    buyClientBalanceId: String,
    sellClientBalanceId: String,
    settlementType: String,
    channel: String,
    requestedAccountType: String,
    requestedValueDate: String,
    orderCreatedDate: Date,
    potentialProfit: String,
    realisedProfit: String,
    isActive: Boolean,
    createdBy: String,
    createdAt: { type: Date, default: Date.now },
    updatedBy: String,
    updatedAt: { type: Date, default: null }
  });

  export const trades = (mongoose.models.trades ||
    mongoose.model<TradeDocument>('trades', tradeSchema, process.env.DB_TRADES_COLLECTION)
    );